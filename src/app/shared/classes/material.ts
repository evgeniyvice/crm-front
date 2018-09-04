declare var M;

export class Material {
  static toast(message: string) {
    M.toast({html: message});
  }
}
