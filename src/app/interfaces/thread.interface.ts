export interface Thread {
    id:            number;
    cuerpo:        string;
    fecha:         Date;
    id_tema_fk:    number;
    id_usuario_fk: number;
    usuario:       string;
    tema:          string;
}
