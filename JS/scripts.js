class validator
{
    constructor()
    {
        this.validations = [
            'data-min-length'

        ]

    }

    //vai iniciar a validação de todos os campos

    validate(form)
    {

        //pegar os inputs
        let inputs = form.getElementsbyTagName('input');

        //HTMLCollection -> array
        let inputsArray = [...inputs];

        //loop dos inputs
        inputsArray.forEach (function(input)
        {
            for(let i = 0; this validations.length > i; ++)
            {
                if(input.getAttribute(this.this.validations[i])!= null);
                {
                    console.log('achou validação');
                }
            };
            
        })this
    }
}


let form = document.getElementById("register-form");
let submit = document.getElementById("btn-submit");

//evento que dispara  a validação

submit.addEventListener('click', function(e)
{
    e.preventDefault();
    validator.validate(form);

})