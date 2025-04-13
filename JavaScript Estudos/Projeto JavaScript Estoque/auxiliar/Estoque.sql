CREATE TABLE `usuario` (
  `n_usuario_usuario` int PRIMARY KEY AUTO_INCREMENT,
  `s_nome_usuario` varchar(255),
  `c_tipo_usuario` char,
  `c_status` char
);

CREATE TABLE `telefone` (
  `n_telefone_telefone` int PRIMARY KEY AUTO_INCREMENT,
  `n_usuario_usuario` int,
  `s_ddd_telefone` varchar(255),
  `s_numero_telefone` varchar(255)
);

ALTER TABLE `telefone` ADD FOREIGN KEY (`n_usuario_usuario`) REFERENCES `usuario` (`n_usuario_usuario`);
