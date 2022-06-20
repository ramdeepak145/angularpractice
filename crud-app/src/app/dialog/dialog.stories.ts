import { Dialog } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { DialogComponent } from './dialog.component';
import { FormBuilder } from '@angular/forms';
// This exports the Stories group for this component
export default {
  
  title: 'DialogComponent',
  component: DialogComponent,
  decorators: [
    moduleMetadata({
      declarations: [DialogComponent],
      imports: [CommonModule],
    }),
  ],
};
const Template: Story<DialogComponent> = () => ({
  component: DialogComponent,
  template: `<app-dialog></app-dialog>`,
});
export const Base = Template.bind({});