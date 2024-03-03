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
(function() {
    'use strict';

    // Crée le div pour afficher le premier texte
    var rs2kTextDiv = document.createElement('div');
    rs2kTextDiv.style.position = 'fixed';
    rs2kTextDiv.style.top = '10px';
    rs2kTextDiv.style.right = '10px';
    rs2kTextDiv.style.color = 'black'; // Couleur du texte
    rs2kTextDiv.style.backgroundColor = 'white'; // Couleur de fond
    rs2kTextDiv.style.padding = '5px';
    rs2kTextDiv.style.fontWeight = 'bold';
    rs2kTextDiv.innerHTML = 'RS2K UPLOAD PHOTO  <span style="color: green; margin-left: 5px;">✅</span>';

    // Ajoute le premier texte à la page
    document.body.appendChild(rs2kTextDiv);



})();
