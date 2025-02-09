import con from './connection.js'

export async function inserirUsuario(usuario) {
    const comando = `
        insert into tb_usuario (nm_usuario, ds_senha)
                    values (?, ?)
    `;

    let resposta = await con.query(comando, [usuario.nome, usuario.senha]);
    let info = resposta[0];

    return info.insertId;
}

export async function validarUsuario() {
    const comando = `
    select id_usuario   id,
           nm_usuario   nome,
           ds_senha     senha
      from tb_usuario
     where nm_usuario = ?
       and ds_senha = ?
    `;

    let resposta = await con.query(comando);
    return resposta[0][0];
}