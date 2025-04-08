<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- Bootstrap CDN -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
        <!-- Bootstrap Font Icon CSS -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
        <title>Registro</title>
    </head>
    <body class="bg-info">
        <div class="container mt-5">
            <?php if (!empty($_POST)): ?>
                <div class="alert alert-success" id="mensaje" role="alert">
                    Registro realizado con éxito
                </div>
            <?php endif ?>
            <div class="d-flex justify-content-center h-100">
                <div class="card w-50">
                    <div class="card-header">
                        <h3><i class="bi bi-gear p-2"></i>Registro</h3>
                    </div>
                    <div class="card-body">
                        <form id="registro" name="registro" method="POST" 
                              action="<?= $_SERVER['PHP_SELF']; ?>" novalidate>
                            <div class="input-group my-2">
                                <span class="input-group-text"><i class="bi bi-person"></i></span>
                                <input type="text" class="form-control"  placeholder="usuario" 
                                       id="usuario" name="usuario" minlength="3" autofocus required 
                                       pattern="^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ'\-`´]+(\s+[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ'\-`´ ]+){0,5}$">
                            </div>
                            <div class="input-group my-2">
                                <span class="input-group-text"><i class="bi bi-key"></i></span>
                                <input type="password" class="form-control" placeholder="contraseña" 
                                       id="password1" name="password1" minlength="8" required 
                                       pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}">
                            </div>
                            <div class="input-group my-2">
                                <span class="input-group-text"><i class="bi bi-key"></i></span>
                                <input type="password" class="form-control"  placeholder="Repita la contraseña" 
                                       id="password2" name="password2" minlength="8" required 
                                       pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}">
                            </div>
                            <div class="input-group my-2">
                                <span class="input-group-text"><i class="bi bi-envelope"></i></span>
                                <input type="email" class="form-control" placeholder="e-Mail" 
                                       name="email" id="email" required>
                            </div>
                            <div class="text-end">
                                <input type="submit" value="Registrar" class="btn btn-info" name="enviar">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <script src="validar.js"></script>
    </body>
</html>