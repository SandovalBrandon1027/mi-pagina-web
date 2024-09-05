import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  contactForm: FormGroup;
  isSubmitting: boolean = false;
  alertMessage: string = '';
  alertType: 'success' | 'error'| ''='';

  constructor(private fb: FormBuilder, private firestore: Firestore) {
    this.contactForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', Validators.required]
    });
  }

  async onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true; // Deshabilitar el botón de envío
      this.alertMessage = '';
      this.alertType = '';
      const formData = this.contactForm.value;
      console.log(formData);
      try {
        const datosCollection = collection(this.firestore, "contactos");
        await addDoc(datosCollection, formData);
        console.log("Mensaje enviado a Firestore");
        this.showAlert("Formulario enviado exitosamente!" , 'success');
        this.contactForm.reset(); // Resetear el formulario después de enviar
      } catch (error) {
        console.log("Error al enviar los datos a Firestore: ", error);
        this.showAlert("Ocurrió un error al enviar el formulario. Por favor, intenta nuevamente.", 'error');
      } finally {
        this.isSubmitting = false; // Habilitar el botón de envío nuevamente
      }
    }
  }

  private showAlert(message: string, type: 'success' | 'error'){
    this.alertMessage = message;
    this.alertType = type;
    setTimeout(()=>{
      this.alertMessage = '';
      this.alertType = '';
    }, 5000);

  }
}
