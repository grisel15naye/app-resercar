export interface Sedes {
    sedeid: number;
  nombresede: string;
  sedeinfo: string;
  lunes: boolean;
  martes: boolean;
  miercoles: boolean;
  jueves: boolean;
  viernes: boolean;
  sabado: boolean;
  domingo: boolean;
  horaabierto: string; // Usamos string para manejar el tiempo en el formato adecuado.
  horacierre: string;
  estadosede: boolean;
}
