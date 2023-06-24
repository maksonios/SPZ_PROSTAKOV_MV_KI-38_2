var encryptAES = new Dropzone("#encrypt-aes", {
    url: '/aes-encrypt/upload-encrypt',
    maxFiles: 1,
    maxFilesize: 3,
    autoProcessQueue: false,
    multiple: false,
    maxfilesexceeded: function (files) {
        this.removeAllFiles();
        this.addFile(files);
    },
    sending: (file, xhr, formData) => {
        formData.append("key", $("#aes-encrypt-key").val());
    },

});

$("#encrypt-encrypt").click(function (e) {
    e.preventDefault();

    decryptDropzone.processQueue();

    decryptDropzone.on("complete", function (response) {
        if (response.xhr.status === 200) {
            console.log(response);
            var downloadLink = document.createElement("a");
            var fileNameInfo = JSON.parse(response.xhr.response);
            var fileId = fileNameInfo.id;
            var fileName = fileNameInfo.name;
            downloadLink.href = '/aes-encrypt/download/'+ fileId;
            downloadLink.setAttribute("download", fileName);
            downloadLink.click();
        } else {
            console.log("Upload failed.");
        }
    });
});


var decryptAES = new Dropzone("#decrypt-aes", {
    url: '/aes-encrypt/upload-decrypt',
    maxFiles: 1,
    maxFilesize: 3,
    autoProcessQueue: false,
    multiple: false,
    maxfilesexceeded: function (files) {
        this.removeAllFiles();
        this.addFile(files);
    },
    sending: (file, xhr, formData) => {
        formData.append("key", $("#aes-decrypt-key").val());
    },

});

$("#decrypt-decrypt").click(function (e) {
    e.preventDefault();

    decryptDropzone.processQueue();

    decryptDropzone.on("complete", function (response) {
        if (response.xhr.status === 200) {
            console.log(response);
            var downloadLink = document.createElement("a");
            var fileNameInfo = JSON.parse(response.xhr.response);
            var fileId = fileNameInfo.id;
            var fileName = fileNameInfo.name;
            downloadLink.href = '/aes-encrypt/download/'+ fileId;
            downloadLink.setAttribute("download", fileName);
            downloadLink.click();
        } else {
            console.log("Upload failed.");
        }
    });
});