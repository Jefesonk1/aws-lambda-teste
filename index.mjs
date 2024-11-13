const numberToWords = (num) => {
    const unidades = [
        'Zero', 'Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez',
        'Onze', 'Doze', 'Treze', 'Quatorze', 'Quinze', 'Dezesseis', 'Dezessete', 'Dezoito', 'Dezenove'
    ];
    const dezenas = [
        '', '', 'Vinte', 'Trinta', 'Quarenta', 'Cinquenta', 'Sessenta', 'Setenta', 'Oitenta', 'Noventa'
    ];
    const centenas = [
        '', 'Cento', 'Duzentos', 'Trezentos', 'Quatrocentos', 'Quinhentos', 'Seiscentos', 'Setecentos', 'Oitocentos', 'Novecentos'
    ];

    const unidade = num % 10;
    const dezena = Math.floor((num / 10)) % 10;
    const centena = Math.floor((num / 100)) % 10;

    if (num < 20) return unidades[num];
    if (num < 100) {
        return dezenas[dezena] + (unidade > 0 ? ' e ' + unidades[unidade] : '');
    }
    if (num < 1000) {
        if (num == 100)
            return "Cem"
        return centenas[centena] + (dezena > 0 ? ' e ' + dezenas[dezena] : '') + (unidade > 0 ? ' e ' + unidades[unidade] : '');
    }
    if(num == 1000)
        return "Mil";
    return "Número inválido (0-1000)";
};

export const handler = async (event) => {
    try{
        const { number } = event
        const result = numberToWords(number);
        return {
            number, text: result
        };
    }
    catch (error) {
        console.error('Erro na entrada:', error.message);
        return 500;
      }
};