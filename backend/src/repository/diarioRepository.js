import con from './connection.js'

export async function consultarDiario() {
    const comando = `
    select id_diario    id,
           usuario_id   usuario,
           ds_conteudo  conteúdo,
           dt_dia       dia
      from tb_diario
    `;

    let resposta = await con.query(comando);
    let info = resposta[0];

    return info;
}