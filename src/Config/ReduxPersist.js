import immutablePersistenceTransform from '../Services/ImmutablePersistenceTransform'
import storage from 'redux-persist/lib/storage'
import { seamlessImmutableReconciler } from 'redux-persist-seamless-immutable'

// More info here:  https://shift.infinite.red/shipping-persistant-reducers-7341691232b1
const REDUX_PERSIST = {
  active: true,
  reducerVersion: '1.0',
  storeConfig: {
    key: 'primary',
    storage,
    // Reducer keys that you do NOT want stored to persistence here.
    blacklist: [],
    // Optionally, just specify the keys you DO want stored to persistence.
    // An empty array means 'don't store any reducers' -> infinitered/ignite#409
    // whitelist: [],
    transforms: [immutablePersistenceTransform],
    stateReconciler: seamlessImmutableReconciler,
  }
}

export default REDUX_PERSIST
