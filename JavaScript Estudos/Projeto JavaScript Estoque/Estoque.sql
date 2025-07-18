CREATE TABLE `pessoa` (
  `n_pessoa_pessoa` int PRIMARY KEY AUTO_INCREMENT,
  `n_fornecedor_fornecedor` int,
  `n_tipopessoa_tipopessoa` int,
  `s_email_pessoa` varchar(255),
  `s_senha_pessoa` varchar(255),
  `s_nome_pessoa` varchar(255),
  `n_priacess_pessoa` int,
  `s_foto_pessoa` longtext,
  `c_status_pessoa` char
);

CREATE TABLE `telefone` (
  `n_telefone_telefone` int PRIMARY KEY AUTO_INCREMENT,
  `n_pessoa_pessoa` int,
  `s_numero_telefone` varchar(255)
);

CREATE TABLE `tipopessoa` (
  `n_tipopessoa_tipopessoa` int PRIMARY KEY AUTO_INCREMENT,
  `s_desc_tipopessoa` varchar(255),
  `n_nivel_tipopessoa` int
);

CREATE TABLE `fornecedor` (
  `n_fornecedor_fornecedor` int PRIMARY KEY AUTO_INCREMENT,
  `s_desc_fornecedor` varchar(255),
  `s_logo_fornecedor` longtext,
  `c_status_fornecedor` char
);

CREATE TABLE `contatofornecedor` (
  `n_contatofornecedor_contatofornecedor` int PRIMARY KEY AUTO_INCREMENT,
  `n_fornecedor_fornecedor` int,
  `n_pessoa_pessoa` int
);

CREATE TABLE `produto` (
  `n_cod_produto` int PRIMARY KEY,
  `n_tipoproduto_tipoproduto` int,
  `s_desc_produto` varchar(255),
  `n_fornecedor_fornecedor` int,
  `n_qtde_produto` int,
  `c_status_produto` char
);

CREATE TABLE `tipoproduto` (
  `n_tipoproduto_tipoproduto` int PRIMARY KEY AUTO_INCREMENT,
  `s_desc_tipoproduto` varchar(255)
);

CREATE TABLE `movimentacao` (
  `n_movimentacao_movimentacao` int PRIMARY KEY AUTO_INCREMENT,
  `n_pessoa_pessoa` int,
  `c_tipo_movimentacao` char,
  `n_qtde_movimentacao` int,
  `dt_datahora_movimentacao` datetime
);

CREATE TABLE `token` (
  `n_token_token` int PRIMARY KEY AUTO_INCREMENT,
  `n_pessoa_pessoa` int,
  `s_token_token` varchar(255),
  `s_validade_token` varchar(255)
);

ALTER TABLE `pessoa` ADD FOREIGN KEY (`n_fornecedor_fornecedor`) REFERENCES `fornecedor` (`n_fornecedor_fornecedor`);

ALTER TABLE `pessoa` ADD FOREIGN KEY (`n_tipopessoa_tipopessoa`) REFERENCES `tipopessoa` (`n_tipopessoa_tipopessoa`);

ALTER TABLE `telefone` ADD FOREIGN KEY (`n_pessoa_pessoa`) REFERENCES `pessoa` (`n_pessoa_pessoa`);

ALTER TABLE `contatofornecedor` ADD FOREIGN KEY (`n_fornecedor_fornecedor`) REFERENCES `fornecedor` (`n_fornecedor_fornecedor`);

ALTER TABLE `contatofornecedor` ADD FOREIGN KEY (`n_pessoa_pessoa`) REFERENCES `pessoa` (`n_pessoa_pessoa`);

ALTER TABLE `produto` ADD FOREIGN KEY (`n_tipoproduto_tipoproduto`) REFERENCES `tipoproduto` (`n_tipoproduto_tipoproduto`);

ALTER TABLE `produto` ADD FOREIGN KEY (`n_fornecedor_fornecedor`) REFERENCES `fornecedor` (`n_fornecedor_fornecedor`);

ALTER TABLE `movimentacao` ADD FOREIGN KEY (`n_pessoa_pessoa`) REFERENCES `pessoa` (`n_pessoa_pessoa`);

ALTER TABLE `token` ADD FOREIGN KEY (`n_pessoa_pessoa`) REFERENCES `pessoa` (`n_pessoa_pessoa`);
