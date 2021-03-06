import * as mutationTypes from '@/store/mutation-types'
import * as storageTypes from '@/store/storage-types'

let localStoragePlugin = (store) => {
  store.commit(mutationTypes.SET_USING, localStorage.getItem(storageTypes.USING) || '')
  store.commit(mutationTypes.SET_CONFIGS, JSON.parse(localStorage.getItem(storageTypes.CONFIGS) || '{}'))
  store.commit(mutationTypes.SET_UPLOADED, JSON.parse(localStorage.getItem(storageTypes.UPLOADED) || '[]'))

  store.subscribe((mutation) => {
    switch (mutation.type) {
      case mutationTypes.SET_USING:
        localStorage.setItem(storageTypes.USING, store.state.using)
        break
      case mutationTypes.SET_CONFIGS:
        localStorage.setItem(storageTypes.CONFIGS, JSON.stringify(store.state.configs))
        break
      case mutationTypes.SET_UPLOADED:
      case mutationTypes.ADD_UPLOADED:
      case mutationTypes.REMOVE_UPLOADED:
        localStorage.setItem(storageTypes.UPLOADED, JSON.stringify(store.state.uploaded))
        break
    }
  })
}

export default [
  localStoragePlugin
]
