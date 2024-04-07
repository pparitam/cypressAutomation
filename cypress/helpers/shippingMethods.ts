type ShippingMap = Record<string, Record<'shippingMethod1', ShippingData> & Record<'shippingMethod2', ShippingData> & Record<'shippingMethod3', ShippingData> & Record<'shippingMethod4', ShippingData>>; 

class ShippingMethod {
  
  public shippingMap: ShippingMap = {
    UK: {
      shippingMethod1: {
        shippingMethodName: 'Standard'
      },
      shippingMethod2: {
        shippingMethodName: 'Evri Standard Parcel Collection'
      },
      shippingMethod3: {
        shippingMethodName: 'Evri Next Day Parcel Collection'
      },
      shippingMethod4: {
        shippingMethodName: 'Asda Next Day Parcel Collection'
      }
    },
    US: {
      shippingMethod1: {
        shippingMethodName: 'Standard'
      },
      shippingMethod2: {
        shippingMethodName: ''
      },
      shippingMethod3: {
        shippingMethodName: ''
      },
      shippingMethod4: {
        shippingMethodName: ''
      }
    },
    EU: {
      shippingMethod1: {
        shippingMethodName: 'Europe and International Delivery'
      },
      shippingMethod2: {
        shippingMethodName: ''
      },
      shippingMethod3: {
        shippingMethodName: ''
      },
      shippingMethod4: {
        shippingMethodName: ''
      }
    },
    AU: {
      shippingMethod1: {
        shippingMethodName: 'Standard'
      },
      shippingMethod2: {
        shippingMethodName: ''
      },
      shippingMethod3: {
        shippingMethodName: ''
      },
      shippingMethod4: {
        shippingMethodName: ''
      }
    },
    NZ: {
      shippingMethod1: {
        shippingMethodName: 'Standard'
      },
      shippingMethod2: {
        shippingMethodName: ''
      },
      shippingMethod3: {
        shippingMethodName: ''
      },
      shippingMethod4: {
        shippingMethodName: ''
      }
    },
    CA: {
      shippingMethod1: {
        shippingMethodName: 'Standard'
      },
      shippingMethod2: {
        shippingMethodName: ''
      },
      shippingMethod3: {
        shippingMethodName: ''
      },
      shippingMethod4: {
        shippingMethodName: ''
      }
    },
    NL: {
      shippingMethod1: {
        shippingMethodName: 'Nederland Standaardlevering'
      },
      shippingMethod2: {
        shippingMethodName: ''
      },
      shippingMethod3: {
        shippingMethodName: ''
      },
      shippingMethod4: {
        shippingMethodName: ''
      }
    },
    DE: {
      shippingMethod1: {
        shippingMethodName: 'Standardlieferung'
      },
      shippingMethod2: {
        shippingMethodName: ''
      },
      shippingMethod3: {
        shippingMethodName: ''
      },
      shippingMethod4: {
        shippingMethodName: ''
      }
    },
    FR: {
      shippingMethod1: {
        shippingMethodName: 'Livraison standard France'
      },
      shippingMethod2: {
        shippingMethodName: 'Point Relais'
      },
      shippingMethod3: {
        shippingMethodName: ''
      },
      shippingMethod4: {
        shippingMethodName: ''
      }
    },
    IE: {
      shippingMethod1: {
        shippingMethodName: 'Standard'
      },
      shippingMethod2: {
        shippingMethodName: ''
      },
      shippingMethod3: {
        shippingMethodName: ''
      },
      shippingMethod4: {
        shippingMethodName: ''
      }
    },
    DK: {
      shippingMethod1: {
        shippingMethodName: 'Danish Standard Delivery'
      },
      shippingMethod2: {
        shippingMethodName: ''
      },
      shippingMethod3: {
        shippingMethodName: ''
      },
      shippingMethod4: {
        shippingMethodName: ''
      }
    },
    FI: {
      shippingMethod1: {
        shippingMethodName: 'Europe and International Delivery'
      },
      shippingMethod2: {
        shippingMethodName: ''
      },
      shippingMethod3: {
        shippingMethodName: ''
      },
      shippingMethod4: {
        shippingMethodName: ''
      }
    },
    NO: {
      shippingMethod1: {
        shippingMethodName: 'Norwegian Standard Delivery'
      },
      shippingMethod2: {
        shippingMethodName: ''
      },
      shippingMethod3: {
        shippingMethodName: ''
      },
      shippingMethod4: {
        shippingMethodName: ''
      }
    },
    SE: {
      shippingMethod1: {
        shippingMethodName: 'Standardleverans Sverige'
      },
      shippingMethod2: {
        shippingMethodName: ''
      },
      shippingMethod3: {
        shippingMethodName: ''
      },
      shippingMethod4: {
        shippingMethodName: ''
      }
    },
    IT: {
      shippingMethod1: {
        shippingMethodName: 'Italia Standard'
      },
      shippingMethod2: {
        shippingMethodName: ''
      },
      shippingMethod3: {
        shippingMethodName: ''
      },
      shippingMethod4: {
        shippingMethodName: ''
      }
    },
    ES: {
      shippingMethod1: {
        shippingMethodName: 'Estándar a España'
      },
      shippingMethod2: {
        shippingMethodName: ''
      },
      shippingMethod3: {
        shippingMethodName: ''
      },
      shippingMethod4: {
        shippingMethodName: ''
      }
    },
    IL: {
      shippingMethod1: {
        shippingMethodName: 'משלוח באירופה ומשלוח בין-לאומי'
      },
      shippingMethod2: {
        shippingMethodName: ''
      },
      shippingMethod3: {
        shippingMethodName: ''
      },
      shippingMethod4: {
        shippingMethodName: ''
      }
    },
    SA: {
      shippingMethod1: {
        shippingMethodName: 'Saudi Arabia Express Delivery'
      },
      shippingMethod2: {
        shippingMethodName: ''
      },
      shippingMethod3: {
        shippingMethodName: ''
      },
      shippingMethod4: {
        shippingMethodName: ''
      }
    },
    AE: {
      shippingMethod1: {
        shippingMethodName: 'UAE Express Delivery'
      },
      shippingMethod2: {
        shippingMethodName: ''
      },
      shippingMethod3: {
        shippingMethodName: ''
      },
      shippingMethod4: {
        shippingMethodName: ''
      }
    },
    BH: {
      shippingMethod1: {
        shippingMethodName: 'Bahrain Express Delivery'
      },
      shippingMethod2: {
        shippingMethodName: ''
      },
      shippingMethod3: {
        shippingMethodName: ''
      },
      shippingMethod4: {
        shippingMethodName: ''
      }
    },
    JO: {
      shippingMethod1: {
        shippingMethodName: 'Jordan Express Delivery'
      },
      shippingMethod2: {
        shippingMethodName: ''
      },
      shippingMethod3: {
        shippingMethodName: ''
      },
      shippingMethod4: {
        shippingMethodName: ''
      }
    },
    KW: {
      shippingMethod1: {
        shippingMethodName: 'Kuwait Express Delivery'
      },
      shippingMethod2: {
        shippingMethodName: ''
      },
      shippingMethod3: {
        shippingMethodName: ''
      },
      shippingMethod4: {
        shippingMethodName: ''
      }
    },
    OM: {
      shippingMethod1: {
        shippingMethodName: 'Oman Express Delivery'
      },
      shippingMethod2: {
        shippingMethodName: ''
      },
      shippingMethod3: {
        shippingMethodName: ''
      },
      shippingMethod4: {
        shippingMethodName: ''
      }
    },
    QA: {
      shippingMethod1: {
        shippingMethodName: 'Qatar Express Delivery'
      },
      shippingMethod2: {
        shippingMethodName: ''
      },
      shippingMethod3: {
        shippingMethodName: ''
      },
      shippingMethod4: {
        shippingMethodName: ''
      }
    },
  };

  /**
   * Returns an address for a locale, given it's the primary test address or secondary test address.
   * @param locale The locale given from the environment variables
   * @param type either primaryAddress or secondaryAddress 
   * @returns AddressData type with all the details for an address.
   */

  getShippingMethodByLocale (locale: string, type: 'shippingMethod1' | 'shippingMethod2' | 'shippingMethod3' | 'shippingMethod4'): ShippingData {
    if (typeof this.shippingMap[locale] === 'undefined') throw new Error('Shipping method could not be found with locale ' + locale);
    return this.shippingMap[locale][type] as ShippingData;
  }
}

export default new ShippingMethod();