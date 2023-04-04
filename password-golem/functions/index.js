const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp()

exports.addUserToFirestore = functions.auth.user().onCreate(async (user) => {
  const { uid, email } = user
  const userRef = admin.firestore().collection('users').doc(uid)

  userRef.set({
    email,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
  })

  const userPasswordsRef = userRef.collection('passwords')

  await userPasswordsRef.add({
    // id: 'placeholder',
  })
})
