import { useState, useEffect, useCallback } from "react"
import Link from "@/assets/LinkWithQuery"
import { useRouter } from "next/router"
import { Controller, useForm, useFieldArray } from "react-hook-form"
import { Editor } from "@tinymce/tinymce-react"
import { FormGroup, Label, Button, Form, Input, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import Select from "react-select"
import { useMutation, useQuery } from "@apollo/client"
import { getCategoryAttributes, _getCountries } from "../../../../redux/actions"
import { ADD_PRODUCT, GET_SELECT } from "../../../../graphql/queries"
import SuccessAddProduct from "./successAddProduct"

export default function AddProductModal(props) {
  const router = useRouter()
  const [useEffectType, setUseEffectType] = useState(true)
  const [categories, setCategories] = useState(props?.categories)
  const [descriptionValue, setDescriptionValue] = useState(null)
  const [titleValue, setTitleValue] = useState(null)
  const [ValueWatchArray, setValueWatchArray] = useState(null)
  const [pricessArray, setPricessArray] = useState([])
  const [fieldsPriceArrayState, setFieldsPriceArrayState] = useState([])
  const [itemSpecification, setItemSpecification] = useState([])
  const [capacityArr, setCapacityArr] = useState([])
  const [UnitPriceArray, setUnitPriceArray] = useState([])
  const [unitsArr, setUnitsArr] = useState([])
  const [firstArPrice, setFirstArPrice] = useState(null)
  const [firstPrice, setFirstPrice] = useState(null)
  const [totalUsd, setTotalUsd] = useState(0)
  const [firstUnit, setFirstUnit] = useState(null)
  const [unitPrice, setUnitPrice] = useState(null)
  const [priceUnit, setPriceUnit] = useState(null)
  const [viewMessage, setViewMessage] = useState(false)
  const [appendPriceNum, setAppendPriceNum] = useState(false)
  const [successAdd, setSuccessAdd] = useState(false)
  const [successLoading, setSuccessLoading] = useState(false)
  const [AppendW, setAppendW] = useState(false)
  const [finalData, setFinalData] = useState([])
  const [PackagingOpt, setPackagingOpt] = useState([])
  const [countryOpt, setCountryOpt] = useState([])
  const [CurrencyOpt, setCurrencyOpt] = useState([])
  const [CapacityOpt, setCapacityOpt] = useState([])
  const [UnitsOpt, setUnitsOpt] = useState([])
  const [CreateArrAttribute, setCreateArrAttribute] = useState([])
  const [Variables, setVariables] = useState([{}])
  const [createAttrObj, setCreateAttrOpj] = useState([{}])
  const [AttrIdArr, setAttrIdArr] = useState([{}])
  const [currencyArr, setCurrencyArr] = useState([])
  const [AtrributesForm, setAtrributesForm] = useState([])
  const [packagingArr, setPackagingArr] = useState([])
  const [attributesArray, setAttributes] = useState([])
  const [categoriesId, setCategoriesId] = useState(props?.categoriesId)
  const [categoriesNames, setCategoriesNames] = useState(props?.categoriesNames)
  // let itemSpecification
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
    control
  } = useForm({ mode: "onBlur" })
  const {
    fields: fieldss,
    append,
    remove
  } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: "Attri" // unique name for your Field Array
  })
  const registerOptions = {
    title: {
      required: "Product Title Is Required",
      minLength: {
        value: 4,
        message: "Product Title must be at least 4 Characters"
      }
    }
  }
  const {
    fields: fieldsW,
    append: appendW,
    remove: removeW
  } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: "fieldsW" // unique name for your Field Array
  })
  const {
    fields: fieldsPrice,
    append: appendPrice,
    remove: removePrice
  } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: "Prices" // unique name for your Field Array
  })

  useEffect(() => {
    append({})
  }, [])

  const currencyOpt = []
  const unitsOpt = []
  const capacityOpt = []
  const packagingOpt = []
  const handleOptionsSelect = (currencyArray, packagingArray, unitsArray, capacityArray) => {
    capacityArray?.map((one) => {
      capacityOpt.push({
        label: one?.translation?.name,
        value: one?.id
      })
    })
    setCapacityOpt(capacityOpt)
    unitsArray?.map((one) => {
      unitsOpt.push({
        label: one?.translation?.name,
        value: one?.id
      })
    })
    setUnitsOpt(unitsOpt)
    currencyArray?.map((one) => {
      currencyOpt.push({
        label: one?.code,
        value: one?.id
      })
    })
    setCurrencyOpt(currencyOpt)
    packagingArray?.map((one) => {
      packagingOpt.push({
        label: one?.translation?.name,
        value: one?.id
      })
    })
    setPackagingOpt(packagingOpt)
  }
  const optionsArray = []
  const names = []
  const fields = []
  const optionsSelect = []
  let finalObject
  const handleOptionsText = (name) => {
    fields.push(name)
  }
  const handleOptions = (name, options, index) => {
    fields.push(name)
    optionsSelect.push({ options: options })
    names.push(name)
    for (var i = 0; i < names.length; i++) {
      const arr = []
      optionsSelect[i].options.map((one, j) => {
        arr.push({
          label: one?.attribute_string_value_translations[0]?.value,
          value: one?.attribute_string_value_translations[0]?.automated_attribute_value_id
        })
      })
      var obj = {} // <---- Move declaration inside loop
      obj[`${names[i]}`] = arr

      finalObject = obj
    }
    optionsArray.push({ key: index, value: finalObject })
  }
  const [addProduct, { data, loading, error }] = useMutation(ADD_PRODUCT, {
    onCompleted: (d) => {
      setSuccessAdd(true)
    }
  })
  if (loading) {
  }

  let selectGQL
  const { data: SELECTGQL } = useQuery(GET_SELECT)
  if (SELECTGQL) {
    selectGQL = SELECTGQL
  }

  let variables
  const handleAdd = (objectProduct) => {
    objectProduct !== null
      ? addProduct({
          variables: { objectProduct }
        }) && console.log(objectProduct, "objectProduct")
      : null
  }
  const [valErrors, setValErrors] = useState({})

  function isObject(objValue) {
    return objValue && typeof objValue === "object" && objValue.constructor === Object
  }

  let isobject
  let AtrrIsObject
  let ArrTest = []
  let pricesArray = []
  const handleFinalVariables = (data) => {
    for (var i = 0; i < fields.length; i++) {
      data?.Attri?.map((attr) => {
        AtrrIsObject = isObject(attr[`${fields[i].replace(/\s+/g, "")}`])
        attr[`${fields[i].replace(/\s+/g, "")}`] !== undefined &&
          (AtrrIsObject
            ? ArrTest.push({
                label: `${fields[i].replace(/\s+/g, "")}`,
                type: "select",
                value: attr[`${fields[i].replace(/\s+/g, "")}`]?.value
              })
            : ArrTest.push({
                label: `${fields[i].replace(/\s+/g, "")}`,
                type: "text",
                value: attr[`${fields[i].replace(/\s+/g, "")}`]
              }))
      })
    }

    setAtrributesForm(ArrTest)
    handleSetAttributes(ArrTest)
  }
  const onSubmit = (data) => {
    console.log(data, "data")
    setFinalData(data), handleFinalVariables(data), handleAdd(objectProduct)
  }
  let categoryAttributeId = categoriesId?.slice(-1)
  useEffect(() => {
    setCurrencyArr(selectGQL?.currencies)
    setPackagingArr(selectGQL?.packaging_types)
    setUnitsArr(selectGQL?.units)
    setCapacityArr(selectGQL?.capacity_frequencies)
    handleOptionsSelect(selectGQL?.currencies, selectGQL?.packaging_types, selectGQL?.units, selectGQL?.capacity_frequencies)
  }, [selectGQL])

  let arrAtributes = [{}]
  useEffect(() => {
    itemSpecification?.map((one) => {
      one?.attribute_type?.name === "droplist"
        ? arrAtributes.push({ label: "select", value: one?.attribute_type_id })
        : one?.attribute_type?.name === "text"
        ? arrAtributes.push({ label: "text", value: one?.attribute_type_id })
        : null
      setAttributes(arrAtributes)
    })
  }, [arrAtributes, itemSpecification])

  useEffect(() => {
    getCategoryAttributes(
      categoryAttributeId,
      (data) => {
        setItemSpecification(data)
      },
      (errors) => {}
    )
  }, [])
  let attrIdArr = [{}]
  const handleSetAttributes = () => {
    for (var i = 0; i < fields.length; i++) {
      attrIdArr.push({
        name: `${fields[i].replace(/\s+/g, "")}`,
        type: ArrTest?.filter((one) => {
          return one?.label.replace(/\s+/g, "") === `${fields[i].replace(/\s+/g, "")}`
        })[0]?.type,
        attribute_id: itemSpecification?.filter((one) => {
          return one?.attribute_translation?.name.replace(/\s+/g, "") === `${fields[i].replace(/\s+/g, "")}`
        })[0]?.id,
        value: ArrTest?.filter((one) => {
          return one?.label.replace(/\s+/g, "") === `${fields[i].replace(/\s+/g, "")}`
        })[0]?.value
      })
    }
    setAttrIdArr(attrIdArr)
    handleCreateAttribute(attrIdArr)
  }
  let CreateObjAttribute = []
  const handleCreateAttribute = (attrIdArr) => {
    attrIdArr?.map((one) => {
      if (one?.value !== undefined) {
        if (one?.type === "select") {
          CreateObjAttribute.push({
            attribute_id: one?.attribute_id,
            attribute_value: {
              create: {
                automated_attribute_value_id: one?.value
              }
            }
          })
        } else if (one?.type === "text") {
          CreateObjAttribute.push({
            attribute_id: one?.attribute_id,
            attribute_value: {
              create: {
                string_value: one?.value
              }
            }
          })
        }
      }
    })
    setCreateArrAttribute(CreateObjAttribute)
    handleSetAttr(CreateObjAttribute)
  }
  const handleSetAttr = (CreateObjAttribute) => {
    handleCreateProduct(CreateObjAttribute)
  }
  let objectProduct = null
  const handleCreateProduct = (ObjAttribute) => {
    objectProduct = {
      price: finalData?.Price ? parseFloat(finalData?.Price) : null,
      unit_id: finalData?.Unit,
      currency_id: finalData?.Currency?.value,
      manufacturing_country_id: finalData?.manufacturing_cofinalDatauntry_id,
      capacity: finalData?.capacity,
      capacity_frequency_id: finalData?.capacity_frequency ? parseInt(finalData?.capacity_frequency) : null,
      length: finalData?.fieldsW?.length > 0 ? parseInt(finalData?.fieldsW[0]?.Length) : null,
      width: finalData?.fieldsW?.length > 0 ? parseInt(finalData?.fieldsW[0]?.Width) : null,
      height: finalData?.fieldsW?.length > 0 ? parseInt(finalData?.fieldsW[0]?.Height) : null,
      weight: finalData?.fieldsW?.length > 0 ? parseInt(finalData?.fieldsW[0]?.Weight) : null,
      can_deliver: true,
      can_provide_free_sample: finalData?.can_provide_free_sample,
      minimum_order: finalData?.Order ? parseInt(finalData?.Order) : null,
      packaging_type_id: finalData?.Pckaging?.value ? parseInt(finalData?.Pckaging?.value) : null,
      product_translations: {
        create: [
          {
            language_code: "en",
            product_name: titleValue,
            description_text: descriptionValue
          },
          {
            language_code: "ar",
            product_name: finalData?.ar_title
          }
        ]
      },
      product_prices_per_units: {
        create: pricessArray?.length > 0 ? pricessArray : []
      },
      attributes: {
        create: ObjAttribute
      },
      product_categories: { sync: categoryAttributeId }
    }
  }
  useEffect(() => {
    watch((value, { name, type }) => setValueWatchArray(value))
  }, [watch])
  let fieldsPriceArray = []
  useEffect(() => {
    ValueWatchArray?.fieldsPrice?.map((field, index) => {
      // console.log(field, "field")
      field?.price !== undefined && field?.unit !== undefined
        ? (fieldsPriceArray.push({
            totalusd: field?.price * field?.unit,
            discount: firstPrice !== null && 100 - (field?.price * 100) / firstPrice
          }),
          pricesArray.push({ price: parseInt(field?.price), unit: parseInt(field?.unit) }))
        : null
    })
    setPricessArray(pricesArray)
    setFieldsPriceArrayState(fieldsPriceArray)
  }, [ValueWatchArray, firstPrice])
  useEffect(() => {
    // fieldsPriceArrayState?.length > 0 &&
    // pricessArray?.length > 0 && console.log(pricessArray, "pricessArray")
  }, [pricessArray])
  let countryArray = []
  useEffect(() => {
    if (useEffectType === true) {
      _getCountries(
        (d) => {
          d?.map((country) => {
            countryArray.push({ label: country?.translations[0]?.name, value: country?.id })
          })
          setCountryOpt(countryArray)
        },
        (err) => {}
      )
      setUseEffectType(false)
    }
  })
  useEffect(() => {
    countryOpt.length > 0 && console.log(countryOpt, "countryOpt")
  }, [countryOpt])

  return !successAdd && !loading ? (
    <Form action="/" className="breadcrumb-container flex-grow-1 d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
      <ModalHeader className="title">
        <p className="title">Basic Information</p>
      </ModalHeader>{" "}
      <div className="breadcrumb-container">
        <div className="banner">
          <span className="pull-left custom-label">Selected Category</span>
          <span className="pull-right">
            <Link href="/new-dashboard/my-store/add-product">
              <a onClick={() => props.handleMain(true)} id="changeCategory">
                Change category
              </a>
            </Link>
          </span>
        </div>
        <ol className="breadcrumb">
          {categoriesNames?.map((one) => {
            return ` ›   ${one}`
          })}
        </ol>
        <div className="category">
          <a onClick={() => props.handleMain(true)} id="icCategory">
            <span className="icon-category" />
          </a>
          {/* </Link> */}
        </div>
      </div>
      <ModalBody className="form-items flex-grow-1 pb-sm-0 pb-3">
        <FormGroup className="form-group">
          <Label id="title" for={`title`}>
            Item Title
          </Label>
          <Controller
            placeholder="Title"
            className="form-control checkable"
            name={`title`}
            id={`title`}
            control={control}
            type="text"
            rules={registerOptions.title}
            render={({ field: { onChange, onBlur, value, name, ref } }) => (
              <Input onBlur={(e) => setTitleValue(e?.target?.value)} onChange={onChange} />
            )}
          />
          <small className="text-danger">{errors?.title && errors.title.message}</small>
          <Label id="ar_titleLabel" for={`ar_titleLabel`}>
            Arabic Item Title (Recommended)
          </Label>
          <Controller
            name="ar_title"
            id="ar_title"
            placeholder="Arabic Title (Recommended)"
            className="form-control"
            control={control}
            type="text"
            render={({ field: { onChange, onBlur, value, name, ref } }) => <Input onChange={onChange} />}
          />
        </FormGroup>
        <FormGroup className="upload-image uploading-box">
          <Label id="item-img" for={`item-img`}></Label>
          <input type="hidden" id="default_image" />
          <Controller type="hidden" name="item-img" id="item-img" multiple control={control} render={({ field }) => <Input {...field} />} />
          <div className="thumbnail-img">
            <a href="#" className="thumbnail">
              <span className="fa fa-plus-square" />
            </a>
          </div>
        </FormGroup>
        <FormGroup className="form-group">
          <Label id="youtube_videoLabel" for={`youtube_videoLabel`}>
            Video URL
          </Label>
          <Controller
            type="text"
            name="youtube_video"
            id="youtube_video"
            className="form-control"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
        </FormGroup>
      </ModalBody>
      <div className="">
        <ModalHeader className="title">
          <p className="title">Item Specifications</p>
        </ModalHeader>
        {fieldss.map(
          (field, index) =>
            index === 0 && (
              <div key={field?.id} name="10" className="d-flex-warp">
                {itemSpecification?.map((one, index) => {
                  return one?.attribute_type?.name === "droplist"
                    ? (handleOptions(one?.attribute_translation?.name, one?.automated_attribute_values, index),
                      (
                        <FormGroup key={one?.id} className="form-group col-md-4">
                          <Label id={`${one?.attribute_translation?.name}`} for={`${one?.attribute_translation?.name}`}>
                            {one?.attribute_translation?.name}
                          </Label>

                          <Controller
                            name={`Attri.${index}.${one?.attribute_translation?.name.replace(/\s+/g, "")}`}
                            id={`${one?.attribute_translation?.name}`}
                            control={control}
                            render={({ field }) => (
                              <Select
                                defaultValue="yes"
                                options={
                                  optionsArray.filter((opt) => {
                                    return opt.key === index
                                  })[0]?.value[`${one?.attribute_translation?.name}`]
                                }
                                {...field}
                              />
                            )}
                          />
                        </FormGroup>
                      ))
                    : one?.attribute_type?.name === "text"
                    ? (handleOptionsText(one?.attribute_translation?.name, one?.attribute_type),
                      (
                        <FormGroup key={one?.id} className="form-group col-md-4">
                          <Label id={`${one?.attribute_translation?.name}`}>{one?.attribute_translation?.name}</Label>
                          <Controller
                            type="text"
                            name={`Attri.${index}.${one?.attribute_translation?.name.replace(/\s+/g, "")}`}
                            id={`${one?.attribute_translation?.name}`}
                            control={control}
                            render={({ field }) => <Input {...field} />}
                          />
                        </FormGroup>
                      ))
                    : null
                })}
              </div>
            )
        )}
        {/* <button type="button" onClick={() => append({})}>
          append
        </button> */}
        {/* <FormGroup className="form-group"> */}
        <Label id={`Description`}>Description</Label>
        <Controller
          // type="text"
          className=""
          name={`Description`}
          id={`Description`}
          control={control}
          render={({ field: { onChange, onBlur, value, name, ref } }) => <Editor onChange={(e) => setDescriptionValue(e?.level?.content)} />}
        />
        {/* </FormGroup> */}
      </div>
      <ModalBody
        style={{
          minHeight: "259px"
        }}
        className="form-items flex-grow-1 pb-sm-0 pb-3"
      >
        <ModalHeader className="title">
          <p className="title">Prices & Offers</p>
        </ModalHeader>
        <div className="d-flex-warp">
          <FormGroup className="form-group col-md-4">
            <Label id="Currency" for={`Currency`}>
              Currency
            </Label>
            <Controller name="Currency" id="Currency" control={control} render={({ field }) => <Select options={CurrencyOpt} {...field} />} />

            <div className="row">
              <div className="col-md-12">
                <div id="old_price_error" className="error font-red" />
                <small className="text-danger">{viewMessage && "please fill the price"}</small>
              </div>
            </div>
          </FormGroup>

          <FormGroup className="input-group col-md-4">
            <Label id="Price" for={`Price`}>
              Price
            </Label>

            <div className="input-group">
              <Controller
                className="form-control"
                name="Price"
                id="Price"
                control={control}
                render={({ field: { onChange, onBlur, value, name, ref } }) => {
                  return (
                    <Input
                      type="number"
                      onChange={(e) => {
                        setFirstPrice(e?.target?.value ? e?.target?.value : null), setViewMessage(false)
                      }}
                    />
                  )
                }}
              />
              <Controller
                type="unit"
                name="unit"
                id="unit"
                control={control}
                render={({ field: { onChange, onBlur, value, name, ref } }) => {
                  return (
                    <div className="input-group-btn">
                      <div className="btn-group bootstrap-select container100">
                        <Select
                          onChange={(e) => setUnitPrice(e?.label)}
                          placeholder={
                            <div>
                              <span className="filter-option pull-left unitper"> Unit</span>
                              <span className="bs-caret">
                                <i className="fa fa-sort" aria-hidden="true" />
                                <span />
                              </span>
                            </div>
                          }
                          className="NewSelect"
                          options={UnitsOpt}
                        />
                      </div>
                    </div>
                  )
                }}
              />
            </div>
          </FormGroup>
          <FormGroup className="form-group col-md-4">
            <Label id="Order" for={`Order`}>
              Minimum Order*
            </Label>
            <Controller className="form-control" type="text" name="Order" id="Order" control={control} render={({ field }) => <Input {...field} />} />
          </FormGroup>
          {fieldsPrice.map((field, index) => (
            <>
              <FormGroup
                style={{
                  color: "green"
                }}
                className="form-group col-md-4"
              >
                <Controller
                  className="form-control"
                  type="text"
                  name={`fieldsPrice.${index}.unit`}
                  id={`fieldsPrice.${index}.unit`}
                  control={control}
                  render={({ field: { onChange, onBlur, value, name, ref } }) => (
                    <Input onChange={onChange} type="number" placeholder={`${unitPrice}`} {...field} />
                  )}
                />
              </FormGroup>
              <FormGroup className="form-group col-md-4">
                <Controller
                  className="form-control"
                  type="text"
                  name={`fieldsPrice.${index}.price`}
                  id={`fieldsPrice.${index}.price`}
                  control={control}
                  render={({ field: { onChange, onBlur, value, name, ref } }) => (
                    <Input placeholder="price" type="float" onChange={onChange} onBlur={onBlur} selected={value} />
                  )}
                />
              </FormGroup>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between"
                }}
                className="col-md-4 aggr priceqty"
              >
                <input type="hidden" name="discount_final_0" id="discount_final_0" defaultValue={0} />
                <div className="discount">
                  <label>DISCOUNT</label>
                  <span id="discount_0">
                    {fieldsPriceArrayState?.length > 0 &&
                    fieldsPriceArrayState[index]?.discount !== Infinity &&
                    !isNaN(fieldsPriceArrayState[index]?.discount) &&
                    !(fieldsPriceArrayState[index]?.discount).toString(10).includes("-")
                      ? (fieldsPriceArrayState[index]?.discount).toString(10).slice(0, 5)
                      : 0}
                    %
                  </span>
                </div>
                <div className="total">
                  <label>TOTAL usd</label>
                  <span id="total_0">{fieldsPriceArrayState?.length > 0 ? fieldsPriceArrayState[index]?.totalusd : 0}</span>
                </div>
                <div
                  className="remove"
                  onClick={() => {
                    setAppendPriceNum(false), removePrice(index)
                  }}
                >
                  <a className="remove-price">
                    <span className="fa fa-times" />
                  </a>
                </div>
              </div>
            </>
          ))}
          <div className="row">
            <div
              style={{
                display: "block",
                marginBottom: "30px"
              }}
              className="col-md-12"
            >
              <div id="old_price_error" className="error font-red" />
              <a
                onClick={() => {
                  firstPrice === null ? setViewMessage(true) : (setAppendPriceNum(true), appendPrice({ price: "price", unit: "unit" }))
                }}
                href="#"
                id="adofferlink"
              >
                {fieldsPriceArrayState?.length > 0 ? "+ Add Another" : "+ Add price based on quantity*"}
              </a>
            </div>
            <div />
          </div>
        </div>
      </ModalBody>
      <ModalBody
        style={{
          minHeight: "280px"
        }}
        className="form-items flex-grow-1 pb-sm-0 pb-3"
      >
        <ModalHeader className="title">
          <p className="title">Shipping & Delivery</p>
        </ModalHeader>
        <FormGroup className="input-group form-group col-md-4">
          <Label id="can_deliver" for={`can_deliver`}>
            I Can Deliver
          </Label>
          <div className="input-group">
            <Controller
              className="form-control"
              type="text"
              name="can_deliver"
              id="can_deliver"
              control={control}
              render={({ field }) => {
                return <Input {...field} />
              }}
            />
            <Controller
              name="unit_can_deliver"
              id="unit_can_deliver"
              control={control}
              render={({ field }) => {
                return (
                  <div className="input-group-btn">
                    <div className="btn-group bootstrap-select container100">
                      <Select
                        placeholder={
                          <div>
                            <span className="filter-option pull-left unitper"> Unit</span>
                            <span className="bs-caret">
                              <i className="fa fa-sort" aria-hidden="true" />
                              <span />
                            </span>
                          </div>
                        }
                        className="NewSelect"
                        options={CapacityOpt}
                        {...field}
                      />
                    </div>
                  </div>
                )
              }}
            />
          </div>
        </FormGroup>
        <div className="row">
          <FormGroup className="form-group col-md-4">
            <Label id="Manufacturing" for={`Manufacturing`}>
              Manufacturing Country*
            </Label>
            <Controller
              name="Manufacturing"
              id="Manufacturing"
              control={control}
              render={({ field }) => <Select defaultValue="yes" options={countryOpt} {...field} />}
            />
          </FormGroup>
          <FormGroup className="form-group col-md-4">
            <Label id="Pckaging" for={`Pckaging`}>
              Pckaging Type
            </Label>
            <Controller name="Pckaging" id="Pckaging" control={control} render={({ field }) => <Select options={PackagingOpt} {...field} />} />
          </FormGroup>
        </div>
        <div className="row">
          <div className="col-md-12">
            <a className="add-dimension">
              {!AppendW ? (
                <span
                  onClick={() => {
                    setAppendW(true), appendW({ Length: "", Width: "", Height: "", Weight: "" })
                  }}
                >
                  + Add Dimension
                </span>
              ) : (
                <span
                  onClick={() => {
                    setAppendW(false), removeW(0)
                  }}
                >
                  - Remove Dimension
                </span>
              )}
            </a>
            {fieldsW.map(
              (field, index) =>
                index === 0 && (
                  <div className="row" key="index">
                    <div className="col-md-3 form-group">
                      <Label id={`fieldsW.${index}.Length`} for={`fieldsW.${index}.Length`}>
                        LENGTH (CM)*
                      </Label>
                      <Controller
                        name={`fieldsW.${index}.Length`}
                        id={`fieldsW.${index}.Length`}
                        control={control}
                        render={({ field }) => <Input type="number" {...field} />}
                      />
                    </div>
                    <div className="col-md-3 form-group">
                      <Label id={`fieldsW.${index}.Width`} for={`fieldsW.${index}.Width`}>
                        WIDTH (CM)*
                      </Label>
                      <Controller
                        name={`fieldsW.${index}.Width`}
                        id={`fieldsW.${index}.Width`}
                        control={control}
                        render={({ field }) => <Input type="number" {...field} />}
                      />
                    </div>
                    <div className="col-md-3 form-group">
                      <Label id={`fieldsW.${index}.Height`} for={`fieldsW.${index}.Height`}>
                        HEIGHT (CM)*
                      </Label>
                      <Controller
                        name={`fieldsW.${index}.Height`}
                        id={`fieldsW.${index}.Height`}
                        control={control}
                        render={({ field }) => <Input type="number" {...field} />}
                      />
                    </div>
                    <div className="col-md-3 form-group">
                      <Label id={`fieldsW.${index}.Weight`} for={`fieldsW.${index}.Weight`}>
                        WEIGHT (KG)*
                      </Label>
                      <Controller
                        name={`fieldsW.${index}.Weight`}
                        id={`fieldsW.${index}.Weight`}
                        control={control}
                        render={({ field }) => <Input type="number" {...field} />}
                      />
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </ModalBody>
      <ModalFooter className="col-md-12">
        <Button type="submit" className="btn btn-primary btn-fill" color="primary">
          {/* {loading ? <ButtonSpinner /> : null} */}
          <span>{"Submit"}</span>
        </Button>
        {/* <Button type="button" className="flex-grow-1" color="secondary">
        <span>{"Cancel"}</span>
      </Button> */}
      </ModalFooter>
    </Form>
  ) : loading ? (
    <div className="spinner15-wrapper">
      <div className="spinner14"></div>
    </div>
  ) : (
    <SuccessAddProduct setSuccessAdd={(successAdd) => setSuccessAdd(successAdd)} />
  )
}
