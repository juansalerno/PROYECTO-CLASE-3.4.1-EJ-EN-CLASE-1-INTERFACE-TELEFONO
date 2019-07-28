import Telefono from './i-Telefono';

export default class SmartPhone {
    private estaPrendido: boolean;

    public constructor () {
        this.estaPrendido = false;
    }

    public prender(): void {
        this.estaPrendido = true;
    }

    public apagar(): void {
        this.estaPrendido = false;
    }

    public llamar(numero: string): void {
        console.log('Llamando al '+ numero + ' ...');
    }

    public sacarFoto(): void {
        console.log('Se ha tomado una foto');
        
    }
}