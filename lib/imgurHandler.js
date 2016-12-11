var imgur = require('imgur')

imgur.setClientId('9c34c3606f727ce')

imgur.setAPIUrl('https://imgur-apiv3.p.mashape.com/3/image')

imgur.setMashapeKey('nhps9N9YQwmshJlQiNPupJjz1iCEp1KfDERjsn2SNzWt4sAoVG')

function convertToBase64 (file) {
  return file.toString()
}

function uploadPhoto() {
  imgur.uploadFile('/home/student/Pictures/maxresdefault.jpg')
    .then(function (json) {
      console.log(json.data.link)
    })
    .catch(function (err) {
      console.log(err.message)
    })
}

module.exports = {
  uploadPhoto,
  convertToBase64
}
