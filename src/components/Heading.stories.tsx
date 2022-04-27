import type { Meta, Story } from '@storybook/react';
import { Heading, type HeadingProps } from 'app/components/Heading';

export default {
  title: 'Components/Heading',
  component: Heading,
} as Meta<HeadingProps>;

const Template: Story<HeadingProps> = args => <Heading {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Test',
};
