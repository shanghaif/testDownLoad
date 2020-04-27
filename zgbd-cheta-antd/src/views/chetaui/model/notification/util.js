export default {
  openBtn (msg, desc, btnTitle, callback) {
    const key = `open${Date.now()}`;
    this.$notification.success({
      message: msg,
      description: desc,
      btn: h => {
        return h(
          'a-button',
          {
            props: {
              type: 'primary',
              size: 'small',
            },
            on: {
              click: function(){
                callback()
                this.$notification.close(key)
              }
            },
          },
          btnTitle,
        );
      },
      key
    });
  }

}