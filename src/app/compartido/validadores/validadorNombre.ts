import { AbstractControl, AsyncValidatorFn } from "@angular/forms";
import { ValidationErrors } from "@angular/forms";

const nombresProhibidos = ["pancho", "lopez", "vaquero", "raton"]
export const validaNombreHeroe: AsyncValidatorFn = async (
    control: AbstractControl
): Promise<ValidationErrors | null> => {
    
    const prohibido = nombresProhibidos.includes(control.value.toLowerCase());   
    console.log("El vaor de prohibo es ", prohibido);
    return prohibido ? { nombreProhibido: { value: control.value } } : null;
}