import Button from '../js/components/Button.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    isRounded: {
      control: 'boolean',
    },
    isDisabled: {
      control: 'boolean',
    },
    onClick: {},
  },
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Default = {
  args: {
    label: 'Button',
  },
};

export const RoundedButton = {
  args: {
    label: 'Rounded Button',
    isRounded: true
  },
};

export const DisabledButton = {
  args: {
    label: 'Disabled Button',
    isDisabled: true
  },
};
