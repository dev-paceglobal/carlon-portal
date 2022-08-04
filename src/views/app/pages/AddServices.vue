<template>
    <v-row>

        <v-col cols="12">
            <base-card ref="form">
                <v-card-title>Add New Service</v-card-title>
                <v-card-text>
                    <v-card-text>
                        <v-text-field
                            ref="name"
                            v-model="name"
                            :rules="[() => !!name || 'This field is required']"
                            :error-messages="errorMessages"
                            label="Service Name"
                            placeholder="Window Cleaning"
                            required
                        />

                    </v-card-text>
                    <v-divider class="mt-12" />
                    <v-card-actions>
                        <v-btn text>
                            Cancel
                        </v-btn>
                        <v-spacer />
                        <v-slide-x-reverse-transition>
                            <v-tooltip v-if="formHasErrors" left>
                                <template v-slot:activator="{on, attrs}">
                                    <v-btn
                                        icon
                                        class="my-0"
                                        v-bind="attrs"
                                        @click="resetForm"
                                        v-on="on"
                                    >
                                        <v-icon>mdi-refresh</v-icon>
                                    </v-btn>
                                </template>
                                <span>Refresh form</span>
                            </v-tooltip>
                        </v-slide-x-reverse-transition>
                        <v-btn color="primary" text @click="submit">
                            Submit
                        </v-btn>
                    </v-card-actions>
                </v-card-text>
            </base-card>
        </v-col>
    </v-row>
</template>
<script>
export default {
    metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'Textfields'
    },
    data: () => ({
        model: "I'm a text field",
        label: 'Hey!',
        hint: 'Customize me!',
        placeholder: '',
        shaped: false,
        outlined: false,
        rounded: false,
        solo: false,
        singleLine: false,
        filled: false,
        clearable: false,
        persistentHint: false,
        loading: false,
        flat: false,
        counterEn: false,
        counter: 0,
        dense: false,
        first: 'John',
        last: 'Doe',
        message1: 'Hey!',
        message2: 'Hey!',
        message3: 'Hey!',
        message4: 'Hey!',
        title: 'Preliminary report',
        description: 'California is a state in the western United States',
        rules: [(v) => v.length <= 25 || 'Max 25 characters'],
        show1: false,
        show2: true,
        show3: false,
        show4: false,
        password: 'Password',
        rulesTwo: {
            required: (value) => !!value || 'Required.',
            min: (v) => v.length >= 8 || 'Min 8 characters',
            emailMatch: () => "The email and password you entered don't match"
        },
        // form validations
        countries: [
            'Afghanistan',
            'Albania',
            'Algeria',
            'Andorra',
            'Angola',
            'Anguilla',
            'Antigua &amp; Barbuda',
            'Argentina',
            'Armenia',
            'Aruba',
            'Australia',
            'Austria',
            'Azerbaijan',
            'Bahamas',
            'Bahrain',
            'Bangladesh',
            'Barbados',
            'Belarus',
            'Belgium',
            'Belize',
            'Benin',
            'Bermuda',
            'Bhutan',
            'Bolivia',
            'Bosnia &amp; Herzegovina',
            'Botswana',
            'Brazil',
            'British Virgin Islands',
            'Brunei',
            'Bulgaria',
            'Burkina Faso',
            'Burundi',
            'Cambodia',
            'Cameroon',
            'Cape Verde',
            'Cayman Islands',
            'Chad',
            'Chile',
            'China',
            'Colombia',
            'Congo',
            'Cook Islands',
            'Costa Rica',
            'Cote D Ivoire',
            'Croatia',
            'Cruise Ship',
            'Cuba',
            'Cyprus',
            'Czech Republic',
            'Denmark',
            'Djibouti',
            'Dominica',
            'Dominican Republic',
            'Ecuador',
            'Egypt',
            'El Salvador',
            'Equatorial Guinea',
            'Estonia',
            'Ethiopia',
            'Falkland Islands',
            'Faroe Islands',
            'Fiji',
            'Finland',
            'France',
            'French Polynesia',
            'French West Indies',
            'Gabon',
            'Gambia',
            'Georgia',
            'Germany',
            'Ghana',
            'Gibraltar',
            'Greece',
            'Greenland',
            'Grenada',
            'Guam',
            'Guatemala',
            'Guernsey',
            'Guinea',
            'Guinea Bissau',
            'Guyana',
            'Haiti',
            'Honduras',
            'Hong Kong',
            'Hungary',
            'Iceland',
            'India',
            'Indonesia',
            'Iran',
            'Iraq',
            'Ireland',
            'Isle of Man',
            'Israel',
            'Italy',
            'Jamaica',
            'Japan',
            'Jersey',
            'Jordan',
            'Kazakhstan',
            'Kenya',
            'Kuwait',
            'Kyrgyz Republic',
            'Laos',
            'Latvia',
            'Lebanon',
            'Lesotho',
            'Liberia',
            'Libya',
            'Liechtenstein',
            'Lithuania',
            'Luxembourg',
            'Macau',
            'Macedonia',
            'Madagascar',
            'Malawi',
            'Malaysia',
            'Maldives',
            'Mali',
            'Malta',
            'Mauritania',
            'Mauritius',
            'Mexico',
            'Moldova',
            'Monaco',
            'Mongolia',
            'Montenegro',
            'Montserrat',
            'Morocco',
            'Mozambique',
            'Namibia',
            'Nepal',
            'Netherlands',
            'Netherlands Antilles',
            'New Caledonia',
            'New Zealand',
            'Nicaragua',
            'Niger',
            'Nigeria',
            'Norway',
            'Oman',
            'Pakistan',
            'Palestine',
            'Panama',
            'Papua New Guinea',
            'Paraguay',
            'Peru',
            'Philippines',
            'Poland',
            'Portugal',
            'Puerto Rico',
            'Qatar',
            'Reunion',
            'Romania',
            'Russia',
            'Rwanda',
            'Saint Pierre &amp; Miquelon',
            'Samoa',
            'San Marino',
            'Satellite',
            'Saudi Arabia',
            'Senegal',
            'Serbia',
            'Seychelles',
            'Sierra Leone',
            'Singapore',
            'Slovakia',
            'Slovenia',
            'South Africa',
            'South Korea',
            'Spain',
            'Sri Lanka',
            'St Kitts &amp; Nevis',
            'St Lucia',
            'St Vincent',
            'St. Lucia',
            'Sudan',
            'Suriname',
            'Swaziland',
            'Sweden',
            'Switzerland',
            'Syria',
            'Taiwan',
            'Tajikistan',
            'Tanzania',
            'Thailand',
            "Timor L'Este",
            'Togo',
            'Tonga',
            'Trinidad &amp; Tobago',
            'Tunisia',
            'Turkey',
            'Turkmenistan',
            'Turks &amp; Caicos',
            'Uganda',
            'Ukraine',
            'United Arab Emirates',
            'United Kingdom',
            'United States',
            'Uruguay',
            'Uzbekistan',
            'Venezuela',
            'Vietnam',
            'Virgin Islands (US)',
            'Yemen',
            'Zambia',
            'Zimbabwe'
        ],
        errorMessages: '',
        name: null,
        address: null,
        city: null,
        state: null,
        zip: null,
        country: null,
        formHasErrors: false
    }),
    computed: {
        form() {
            return {
                name: this.name,
                address: this.address,
                city: this.city,
                state: this.state,
                zip: this.zip,
                country: this.country
            }
        }
    },

    watch: {
        name() {
            this.errorMessages = ''
        }
    },

    methods: {
        addressCheck() {
            this.errorMessages =
                this.address && !this.name ? "Hey! I'm required" : ''

            return true
        },
        resetForm() {
            this.errorMessages = []
            this.formHasErrors = false

            Object.keys(this.form).forEach((f) => {
                this.$refs[f].reset()
            })
        },
        submit() {
            this.formHasErrors = false

            Object.keys(this.form).forEach((f) => {
                if (!this.form[f]) this.formHasErrors = true

                this.$refs[f].validate(true)
            })
        }
    }
}
</script>
