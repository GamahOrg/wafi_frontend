export interface accordionComponent {
  icon?: string; // index = 0
  title: string;
  component: any;
  disabled: boolean;
  isVisible: boolean;
  isViewed?: boolean;
  isRendered: boolean;
  id?: string;
  errNum?: number;
  accordionCode?: string;
  isOpen?: boolean;
  isDeletebtn?: boolean;
  deleteDynamicMsg?: string;
  // accordionErrors?: tabError[],
}

export class accordionContent {
  oneAtATime: boolean = true;
  isAnimated: boolean = true;
  accordionComponentList: accordionComponent[] = [];
}
