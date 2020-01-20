import React from 'react'
import { action } from '@storybook/addon-actions';
import Counter from '../components/Counter'

export default {
  title: 'Counter',
  component: Counter
}

export const Example = () =>
  <Counter value={0} setValue={action('setValue')} />

