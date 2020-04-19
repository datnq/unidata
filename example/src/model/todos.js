import { required, minlen } from '@datnq/usemodel/lib/validators'
import { Field } from '@datnq/usemodel'

class CheckboxField extends Field {
  extractFromEvent(e) {
    const {
      target: { value, checked },
    } = e
    this.setValue(checked ? value : null)
  }
}

export default () => {
  return {
    content: {
      label: 'Todo Content',
      validators: [
        { test: required(), errorMessage: '%(label)s is required' },
        {
          test: minlen(6),
          errorMessage: '%(label)s must be longer than 6 characters',
        },
      ],
    },
    completed: {
      label: 'Completed',
      type: CheckboxField,
    },
  }
}
