export const sendNotification = (text: string) => {
    if (!('Notification' in window)) {
      alert('Your browser does not support notifications');
    }
  
    else if (Notification.permission === 'granted') {
      new Notification(text);
    }
  }

export const requestNotificationsPermission = async () => {
    await Notification.requestPermission();
}