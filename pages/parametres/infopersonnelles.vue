<template>
  <v-container pl-0>
    <v-row>
      <v-col md="2" lg="2" sm="12" >
        <v-container pl-0>
          <left-menu :items="leftmenuItems"></left-menu>
        </v-container>
      </v-col>

      <v-col md="10" lg="10" sm="12" class="full-height">
        <v-container>
          <page-header :items="headerItems"></page-header>
        </v-container>
        <v-container pl-0>
          <v-row align="center"
            justify="center">
            <v-col cols="6" md="6" lg="6" sm="12">
              <form class="text-sm-center">
                <div >
                  <div class="headline">
                    <v-avatar size="150px">
                      <img src="@/static/avatar/user.png" alt="Cheikh Gueye"/>
                    </v-avatar>
                  </div>
                  <span class="caption">Photo de profil png ou jpg max 20Mo</span>
                </div>
              
                <v-row>
                  <v-col cols="6">
                    <v-text-field
                    label="Prénom"
                    outlined
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                      label="Nom"
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                      label="Adresse Email"
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                      label="Fonction"
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                      label="Adresse"
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-select
                      :items="items"                
                      label="Structure"
                      outlined
                    ></v-select>
                  </v-col>
                  <v-col cols="12">
                    <v-select
                      :items="items"                
                      label="Roles"
                      outlined
                    ></v-select>
                  </v-col>
                </v-row>
                

                <v-btn
                  class="mr-4 text-white" color="#1B73E8"
                  @click="submit"
                >
                  Enregistrer
                </v-btn>
              </form>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
  
</template>

<script>
import LeftMenu from '@/components/LeftMenu';
import PageHeader from '@/components/PageHeader';
  export default {
    layout: "dashboard",
    components: {
      LeftMenu,
      PageHeader
    },
    data () {
      return {
        leftmenuItems: [
          { text: 'Informations personnelles', icon: 'mdi-account-edit',link:'/parametres/infopersonnelles',position:0 },
          { text: 'Securité', icon: 'mdi-account-lock',link:'/parametres/securite',position:1  }
        ],
        headerItems: [
        {
          text: 'Tableau de bord',
          disabled: false,
          to: '/dashboard',
          exact: true
        },
        {
          text: 'Paramétres',
          disabled: false,
          to: '/parametres',
          exact: true
        },
        {
          text: 'Informations personnelles',
          disabled: true,
          to: '/parametres/infopersonnelles',
          exact: true
        },
        ]
      }
    }

  }
</script>

<style scoped>
.leftmenu{
  background-color: rgb(227, 227, 236);
  color:black;
  padding:0px 30px 0px 10px !important;
  border-radius: 0px 20px 20px 0px;
}
.text-white{
  color: #fff;
}
.form{
  width: 50%;
}
</style>
