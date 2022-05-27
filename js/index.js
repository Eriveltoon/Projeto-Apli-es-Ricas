class FormPost{
    constructor(idForm, idTextarea, idUlPost){
        this.form = document.getElementById(idForm); 
        this.textarea = document.getElementById(idTextarea);
        this.idUlPost = document.getElementById(idUlPost);
        this.addSubmit();
    }

    onSubmit(func){
        this.form.addEventListener('submit', func)
    }

    validar(value){
        if(value == '' || value == null || value == undefined || value.length < 2 )
        {
            return false;
        }else{
            return true;
        }
    }

    GetHora(){
        const time = new Date();
        const hora = time.getHours();
        const minutos = time.getMinutes();

        return `${hora}h ${minutos}min`;
    }
    addSubmit(){
        const handleSubmit = (event) => {
            event.preventDefault();
            if(this.validar(this.textarea.value)){
               const time = this.GetHora();
                const newPost = document.createElement('li');
                newPost.classList.add('post');
                newPost.innerHTML = 
                `
                    <div class="infoUserPost">
                        <div class="imgUserPost"></div>
                        <div class="nameAndHour">
                            <strong>Erivelton</strong>
                        </div>
                        <div>
                            ${time}
                        </div>
                    </div>
                    <p>
                        ${this.textarea.value}
                    </p>
                    <div class="actionBtnPost">
                        <button type="button" class="filesPost like"><img src="../images/afirmativo.png" style="width: 20px;" alt="Curtir">Curtir</button>
                        <button type="button" class="filesPost coment"><img src="../images/comente.png" style="width: 20px;"  alt="Comentar">Comentar</button>
                        <button type="button" class="filesPost share"><img src="../images/mandar.png"  style="width: 20px;" alt="Compartilhar">Compartilhar</button>
                    </div>
                `;
                this.idUlPost.append(newPost);
                this.textarea.value = "";
            }else{
                alert('Valor insuficiente');
            }
        }
        this.onSubmit(handleSubmit)
    }
}

const postForm = new FormPost('formPost', 'textarea', 'posts')








