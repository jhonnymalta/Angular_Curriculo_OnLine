import { Component, signal } from '@angular/core';
import { IExperiencias } from '../../Intefaces/IExperiencias';

@Component({
  selector: 'app-experiencias',
  standalone: true,
  imports: [],
  templateUrl: './experiencias.component.html',
  styleUrl: './experiencias.component.scss'
})
export class ExperienciasComponent {
  public arrayExperiencias = signal<IExperiencias[]>([
    {
      summary:{
        strong: 'Desenvolvedor DOTNET pleno',
        p: 'StandBy Consultoria e Sistema LTDA | junho de 2023 até maio de 2024 - 11 meses',
      },
      text: `Desenvolvi novas funcionalidades em uma arquitetura moderna, criei
      minuciosamente controllers, services, repositories e validations. Isso garantiu uma
      separação eficiente de responsabilidades, abrindo caminho para manutenção
      simplificada e escalabilidade. Participando desde o processo de entendimento das
      tarefas até a entrega ao cliente. Prezando pelo constante contato com o usuário,
      seguindo os ritos do SCRUM, afim de garantir uma melhor qualidade de entrega.`,
    },
    {
      summary:{
        strong: 'Desenvolvedor DOTNET pleno',
        p: 'StandBy Consultoria e Sistema LTDA | junho de 2023 até maio de 2024 - 11 meses',
      },
      text: `Desenvolvi novas funcionalidades em uma arquitetura moderna, criei
      minuciosamente controllers, services, repositories e validations. Isso garantiu uma
      separação eficiente de responsabilidades, abrindo caminho para manutenção
      simplificada e escalabilidade. Participando desde o processo de entendimento das
      tarefas até a entrega ao cliente. Prezando pelo constante contato com o usuário,
      seguindo os ritos do SCRUM, afim de garantir uma melhor qualidade de entrega.`,
    },
  ])
}
