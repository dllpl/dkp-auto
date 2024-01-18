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
                form: {
                    auto: {
                        mark_and_model: {
                            val: ''
                        },
                        vin: {
                            val: '',
                            options: {
                                mask: '#################'
                            }
                        },
                        type: {
                            val: ''
                        },
                        year: {
                            val: '',
                            options: {
                                mask: '##.##.####',
                            }
                        },
                        mileage: {
                            val: null,
                        },
                        power: {
                            val: null,
                        },
                        volume: {
                            val: null
                        },
                        color: {
                            val: ''
                        },
                        engine_model: {
                            val: ''
                        },
                        engine_number: {
                            val: null
                        },
                        chassis_number: {
                            val: 'Отсутствует'
                        },
                        body_number: {
                            val: ''
                        },
                        pts: {
                            series_and_number: {
                                val: null
                            },
                            date: {
                                val: '',
                                options: {
                                    mask: '##.##.####',
                                }
                            },
                            who_give: {
                                val: ''
                            },
                        },
                        gos_number: {
                            val: ''
                        },
                        sts: {
                            series: {
                                val: ''
                            },
                            number: {
                                val: ''
                            },
                            date: {
                                val: '',
                                options: {
                                    mask: '##.##.####',
                                }
                            },
                            who_give: {
                                val: ''
                            },
                        },
                        price: {
                            val:'',
                        }

                    },
                    owner: {
                        current: {
                            fio: '',
                            pass: {
                                series_and_number: {
                                    val: '',
                                    options: {
                                        mask: '#### ######'
                                    }
                                },
                                date: {
                                    val: '',
                                    options: {
                                        mask: '##.##.####'
                                    }
                                },
                                code: {
                                    val: '',
                                    options: {
                                        mask: '###-###'
                                    }
                                },
                                who_give: {
                                    val: '',
                                }
                            },
                            birthdate: {
                                val: '',
                                options: {
                                    mask: '##.##.####'
                                }
                            },
                            birthplace: {
                                val: '',
                            },
                            reg_address: {
                                val: '',
                            }
                        },
                        new: {
                            fio: '',
                            pass: {
                                series_and_number: {
                                    val: '',
                                    options: {
                                        mask: '#### ######'
                                    }
                                },
                                date: {
                                    val: '',
                                    options: {
                                        mask: '##.##.####'
                                    }
                                },
                                code: {
                                    val: '',
                                    options: {
                                        mask: '###-###'
                                    }
                                },
                                who_give: {
                                    val: '',
                                }
                            },
                            birthdate: {
                                val: '',
                                options: {
                                    mask: '##.##.####'
                                }
                            },
                            birthplace: {
                                val: '',
                            },
                            reg_address: {
                                val: '',
                            }
                        }
                    },
                    place: {
                        val: '',
                    },
                    date: {
                        val: '',
                        options: {
                            mask: '##.##.####'
                        }
                    },
                },
                dict: {
                    auto_types: ['Легковой', 'Грузовой', 'Автобус', 'Мотоцикл']
                }
            }
        },
        methods: {
            onSubmit(values) {
                // TODO:
            }
        }
    },
)
    .use(vuetify)
    .mount('#app')
