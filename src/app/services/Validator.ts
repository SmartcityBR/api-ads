type object_type = "announcement" | "advertiser";

class Validator {
  data: object | any;
  typeOfObject: object_type;

  constructor(data: object, typeOfObject: object_type) {
    this.data = data;
    this.typeOfObject = typeOfObject;
  }

  checkValuesIsInObject(): boolean {
    let hasAllValuesInObject: boolean = true;

    if (this.typeOfObject === "announcement") {
      const announcementsFields: Array<string> = [
        "id_advertiser",
        "segment",
        "type",
        "location",
        "url",
      ];

      for (let field of announcementsFields) {
        if (!this.data[field]) {
          hasAllValuesInObject = false;
        }
      }
    } else if (this.typeOfObject === "advertiser") {
      const advertisersFields: Array<string> = ["name", "city", "segment"];

      for (let field of advertisersFields) {
        if (!this.data[field]) {
          hasAllValuesInObject = false;
        }
      }
    }

    return hasAllValuesInObject;
  }

  checkNullValues(): boolean {
    let hasNullValues: boolean = false;
    if (typeof this.data === "object") {
      for (let key in this.data) {
        if (!this.data[key]) {
          hasNullValues = true;
        }
      }
    }

    return hasNullValues;
  }
}

export default Validator;
