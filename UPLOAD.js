function img() {
        var imageUrl = ""; var linkText = document.querySelector('a.h6').innerText.replace(/\s/g, '');
        for (var i = 0; i < IMages.length; i++) {
            var obj = IMages[i];
            if (obj.hasOwnProperty(linkText)) { imageUrl = obj[linkText]; break; }
        } const fileInput = document.getElementById('uploadfile-1');
        var xhr = new XMLHttpRequest(); xhr.open("GET", imageUrl, true);
        xhr.responseType = "blob"; xhr.onload = function () {
            if (xhr.status === 200) {
                var blob = xhr.response; var fd = new FormData(); fd.append('file', blob, "image.jpg");
                $.ajax({
                    url: "/DZA/query/UploadProfileImage", type: 'post', data: fd, contentType: false, processData: false, success: function (result) {
                        if (result.success) {
                            $("#uploadfile-1-preview").attr("src", "/DZA/query/getfile?fileid=" + result.fileId);
                            $("#ApplicantPhotoId").val(result.fileId);
                        } else { alert(result.err); }
                    }
                });
            } else {
                alert("Failed to retrieve the image from the URL.");
            }
        }; if (imageUrl.length >= 1) { xhr.send(); }
    } img()
