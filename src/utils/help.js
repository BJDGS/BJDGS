export default {
  toast(title, duration = 3000, mask = false, icon = 'none') {
    if (Boolean(title) === false) {
      return;
    }
    uni.showToast({
      title,
      duration,
      mask,
      icon
    });
  },
}