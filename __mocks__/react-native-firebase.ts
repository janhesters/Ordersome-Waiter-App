const firebase = {
  messaging: jest.fn(() => ({
    hasPermission: jest.fn(() => new Promise(resolve => resolve(true))),
    onMessage: jest.fn(),
    requestPermission: jest.fn(() => new Promise(resolve => resolve(true)))
  }))
};

export default firebase;

// jest.mock("react-native-firebase", () => {
//   return {
//     admob: jest.fn(() => {
//       return {
//         onNotification: jest.fn(),
//         onNotificationDisplayed: jest.fn()
//       };
//     }),
//     analytics: jest.fn(() => {
//       return {
//         onNotification: jest.fn(),
//         onNotificationDisplayed: jest.fn()
//       };
//     }),
//     auth: jest.fn(() => {
//       return {
//         getToken: jest.fn(() => Promise.resolve("RN-Firebase-Token")),
//         hasPermission: jest.fn(() => Promise.resolve(true)),
//         requestPermission: jest.fn(() => Promise.resolve(true)),
//         subscribeToTopic: jest.fn(),
//         unsubscribeFromTopic: jest.fn()
//       };
//     }),
//     config: jest.fn(() => {
//       return {
//         onNotification: jest.fn(),
//         onNotificationDisplayed: jest.fn()
//       };
//     }),
//     crashlytics: jest.fn(() => {
//       return {
//         onNotification: jest.fn(),
//         onNotificationDisplayed: jest.fn()
//       };
//     }),
//     database: jest.fn(() => {
//       return {
//         onNotification: jest.fn(),
//         onNotificationDisplayed: jest.fn()
//       };
//     }),
//     firestore: jest.fn(() => {
//       return {
//         onNotification: jest.fn(),
//         onNotificationDisplayed: jest.fn()
//       };
//     }),
//     iid: jest.fn(() => {
//       return {
//         onNotification: jest.fn(),
//         onNotificationDisplayed: jest.fn()
//       };
//     }),
//     links: jest.fn(() => {
//       return {
//         onNotification: jest.fn(),
//         onNotificationDisplayed: jest.fn()
//       };
//     }),
//     messaging: jest.fn(() => {
//       return {
//         getToken: jest.fn(() => Promise.resolve("RN-Firebase-Token")),
//         hasPermission: jest.fn(() => Promise.resolve(true)),
//         requestPermission: jest.fn(() => Promise.resolve(true)),
//         subscribeToTopic: jest.fn(),
//         unsubscribeFromTopic: jest.fn()
//       };
//     }),
//     notifications: jest.fn(() => {
//       return {
//         displayNotification: jest.fn(),
//         getInitialNotification: jest.fn(),
//         onNotification: jest.fn(),
//         onNotificationOpened: jest.fn(),
//         removeDeliveredNotification: jest.fn(),
//         setBadge: jest.fn()
//       };
//     }),
//     perf: jest.fn(() => {
//       return {
//         onNotification: jest.fn(),
//         onNotificationDisplayed: jest.fn()
//       };
//     }),
//     storage: jest.fn(() => {
//       return {
//         onNotification: jest.fn(),
//         onNotificationDisplayed: jest.fn()
//       };
//     })
//   };
// });
