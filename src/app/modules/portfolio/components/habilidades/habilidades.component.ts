import { Component, signal } from '@angular/core';
import { IConhecimento } from '../../Intefaces/IConhecimentos';

@Component({
  selector: 'app-habilidades',
  standalone: true,
  imports: [],
  templateUrl: './habilidades.component.html',
  styleUrl: './habilidades.component.scss'
})
export class HabilidadesComponent {
  public arrayConhecimentos = signal<IConhecimento[]>([
    {      
      src: 'assets/icons/html5.svg',
      alt: 'ícone de html5'
    },
    {
      src: 'assets/icons/html5.svg',
      alt: 'ícone de html5'
    },
    {
      src: 'assets/icons/html5.svg',
      alt: 'ícone de html5'
    },
    {
      src: 'assets/icons/html5.svg',
      alt: 'ícone de html5'
    }

])
}
