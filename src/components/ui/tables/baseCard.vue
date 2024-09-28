<template>
  <div class="row">
    <div v-for="(establishment, index) in data" :key="index" class="col-md-4 mb-4">
      <div 
        class="card h-100"
        @mouseover="hoveredIndex = index"
        @mouseleave="hoveredIndex = null"
      >
        <img :src="establishment.logo" class="card-img-top" alt="Logo del establecimiento" />
        <div class="card-body">
          <h5 class="card-title">{{ establishment.nombre }}</h5>
          <p class="card-text">{{ establishment.descripcion }}</p>
        </div>
        <!-- Información adicional al pasar el cursor -->
        <div v-if="hoveredIndex === index" class="overlay">
          <p>Teléfono: {{ establishment.telefono }}</p>
          <p>Dirección: {{ establishment.direccion }}</p>
          <p>Email: {{ establishment.email }}</p>
          <p>Calificación: {{ establishment.calificacion }}</p>
          <!-- Botón de calificación -->
          <button class="btn btn-primary mt-3" @click="handleRate(establishment)">Calificar</button>
        </div>
      </div>
    </div>

    <!-- Modal para calificar el establecimiento -->
    <div class="modal fade" id="rateModal" tabindex="-1" aria-labelledby="rateModalLabel" aria-hidden="true" @hidden.bs.modal="clearRating">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="rateModalLabel">Calificar {{ selectedEstablishment?.nombre }}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <!-- Formulario de calificación -->
            <label for="rating">Calificación:</label>
            <input type="number" id="rating" v-model="rating" class="form-control" min="1" max="5" placeholder="1-5" />
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            <button type="button" class="btn btn-primary" @click="submitRating">Enviar Calificación</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, inject } from 'vue';
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2';
import { getAuth } from "firebase/auth";
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { doc, getDoc, updateDoc } from "firebase/firestore"; // Importar las funciones necesarias

const hoveredIndex = ref(null);
const selectedEstablishment = ref(null);
const rating = ref(null);

// Inyectar el objeto de Firestore (db) si se necesita para guardar la calificación
const db = inject('db');
const auth = getAuth();
const router = useRouter();

// Propiedades
const props = defineProps({
  data: Array,
});

// Función para manejar el clic en "Calificar"
const handleRate = (establishment) => {
  const user = auth.currentUser;
  if (user) {
    // Usuario logueado
    selectedEstablishment.value = establishment;
    const rateModal = new bootstrap.Modal(document.getElementById('rateModal'));
    rateModal.show();
  } else {
    // Usuario no logueado
    Swal.fire({
      title: '¿Quieres iniciar sesión?',
      text: "Debes estar logueado para calificar.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, llevarme al login',
      cancelButtonText: 'No, gracias'
    }).then((result) => {
      if (result.isConfirmed) {
        router.push('/login');
      }
    });
  }
};

// Función para enviar la calificación
const submitRating = async () => {
  if (!rating.value || rating.value < 1 || rating.value > 5) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'La calificación debe estar entre 1 y 5.'
    });
    return;
  }

  const establishmentRef = doc(db, 'restaurantes', selectedEstablishment.value.id);
  const establishmentDoc = await getDoc(establishmentRef);
  
  if (establishmentDoc.exists()) {
    const valoraciones = establishmentDoc.data().valoracion || [];
    valoraciones.push(rating.value);

    const calificacion = valoraciones.reduce((acc, val) => acc + val, 0) / valoraciones.length;

    await updateDoc(establishmentRef, {
      valoracion: valoraciones,
      calificacion: calificacion
    });

    Swal.fire({
      icon: 'success',
      title: '¡Gracias!',
      text: 'Tu calificación ha sido enviada.'
    });

    // Cerrar la modal
    const rateModal = bootstrap.Modal.getInstance(document.getElementById('rateModal'));
    rateModal.hide();

    // Limpiar el valor de la calificación
    rating.value = null;
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'No se encontró el establecimiento.'
    });
    console.log('No se encontró el establecimiento: ' + selectedEstablishment.value.id);
  }
};

// Función para limpiar el campo de calificación
const clearRating = () => {
  rating.value = null;
};

</script>

<style scoped lang="scss">
@import "../../../assets/styles/scss/card/cardsBaseEstable.scss";
</style>
