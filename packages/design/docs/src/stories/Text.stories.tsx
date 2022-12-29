import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@sothen-mfe/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa repudiandae voluptatum laboriosam quibusdam omnis quasi rerum! Provident eum necessitatibus dolores sequi nesciunt. Saepe quasi eveniet quibusdam corrupti reiciendis accusantium quisquam!',
    size: 'md',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
    as: {
      control: {
        type: null,
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
