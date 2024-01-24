const app = Vue.createApp({
        directives: {maska: vMaska},
        components: {
            VForm: Form,
            VField: Field,
            ErrorMessage,
        },
        data() {
            return {
                valid: false,

                options: {
                    date: {
                        mask: '##.##.####'
                    },
                    vin: {
                        mask: '#################'
                    },
                    pass_code: {
                        mask: '###-###'
                    },
                    series_and_number: {
                        mask: '#### ######'
                    },
                    year: {
                        mask: '####',
                        postProcess: val => {
                            const max = "" + new Date().getFullYear()
                            return val > max ? max : val
                        }
                    }
                },

                form: {
                    auto: {
                        mark_and_model: null,
                        vin: null,
                        type: null,
                        year: null,
                        mileage: null,
                        power: null,
                        volume: null,
                        color: null,
                        engine_model: null,
                        engine_number: null,
                        chassis_number: 'Отсутствует',
                        body_number: null,
                        pts: {
                            series_and_number: null,
                            date: null,
                            who_give: null,
                        },
                        gos_number: null,
                        sts: {
                            series: null,
                            number: null,
                            date: null,
                            who_give: null,
                        },
                        price: null

                    },
                    owner: {
                        current: {
                            fio: null,
                            pass: {
                                series_and_number: null,
                                date: null,
                                code: null,
                                who_give: null,
                            },
                            birthdate: null,
                            birthplace: null,
                            reg_address: null
                        },
                        new: {
                            fio: null,
                            pass: {
                                series_and_number: null,
                                date: null,
                                code: null,
                                who_give: null,
                            },
                            birthdate: null,
                            birthplace: null,
                            reg_address: null
                        }
                    },
                    place: null,
                    date: null,
                },
                dict: {
                    auto_types: ['Легковой', 'Грузовой', 'Автобус', 'Мотоцикл']
                },

                loaders: {
                    btn: {
                        submit: false
                    }
                }
            }
        },
        methods: {
            async submit(validate) {

                let val_data = await validate()
                let form = this.form

                if (val_data.valid) {

                    this.loaders.btn.submit = true

                    fetch('https://automost.pro/docs/dkp', {
                        method: 'POST',
                        body: JSON.stringify(form),
                        headers: {'Content-type': 'application/json; charset=UTF-8'}
                    }).then((response) => response.blob())
                        .then((blob) => {
                            const url = URL.createObjectURL(blob);
                            const a = document.createElement('a');
                            a.href = url;
                            a.download = 'Договор купли-продажи автомобиля.pdf';
                            a.click();
                        }).finally(() => {
                        this.loaders.btn.submit = false
                    })

                } else {
                    //TODO уведомление
                }
            }
        }
    },
)
    .use(vuetify)
    .mount('#app')
