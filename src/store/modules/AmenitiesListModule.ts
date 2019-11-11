  import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
  import { AmenitiesModel } from '@/model/AmenitiesModel';
  import AmenitiesService from '@/services/AmenitieService';

  @Module({
    namespaced: true,
  })
  export default class UserModule extends VuexModule {
    private amenitiesList!: AmenitiesModel[];

    @Mutation
    public setAmenitiesList(list: AmenitiesModel[]) {
      this.amenitiesList = list;
    }

    @Action({ commit: 'setAmenitiesList' })
    public async getAmenitiesList(): Promise<AmenitiesModel[]> {
      try {
        const AmenitiesList = await AmenitiesService.getAmenitiesList();
        return AmenitiesList;
      } catch (err) {
        throw err;
      }
    }
  }
