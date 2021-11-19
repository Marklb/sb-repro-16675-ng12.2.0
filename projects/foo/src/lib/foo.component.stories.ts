import { Story, Meta } from '@storybook/angular/types-6-0';

import { FooComponent } from './foo.component';

export default {
  title: 'Example/FooComponent',
  component: FooComponent,
} as Meta;

const Template: Story<FooComponent> = (args: FooComponent) => ({
  props: args,
});

export const Default = Template.bind({});

export const Primary = Template.bind({});
Primary.args = {
  bar: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  bar: 'secondary',
};
