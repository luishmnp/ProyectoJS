<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recibir y limpiar los datos del formulario
    $nombre = filter_var(trim($_POST["nombre"]), FILTER_SANITIZE_STRING);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $mensaje = filter_var(trim($_POST["mensaje"]), FILTER_SANITIZE_STRING);

    // Correo donde recibirás los datos
    $destino = "luishmnp@gmail.com"; 
    $asunto = "Nuevo mensaje de contacto de: $nombre";

    // Contenido del correo
    $contenido = "Has recibido un nuevo mensaje desde el formulario de contacto.\n\n";
    $contenido .= "Nombre: $nombre\n";
    $contenido .= "Correo: $email\n\n";
    $contenido .= "Mensaje:\n$mensaje\n";

    // Cabeceras del correo
    $headers = "From: $nombre <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Enviar correo
    if (mail($destino, $asunto, $contenido, $headers)) {
        echo "<script>
                alert('¡Mensaje enviado con éxito!');
                window.location.href = '../index.html';
              </script>";
    } else {
        echo "<script>
                alert('Error al enviar el mensaje. Inténtalo de nuevo.');
                window.history.back();
              </script>";
    }
} else {
    header("Location: ../index.html");
    exit();
}
?>