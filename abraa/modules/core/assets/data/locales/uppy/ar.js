const ar = {}

ar.strings = {
  addMore: "أضف المزيد",
  addMoreFiles: "اضف المزيد من الملفات",
  addingMoreFiles: " اضافة المزيد من الملفات",
  allowAccessDescription: "ارجو السماح للموقع بالتقاط الصور والفديوهات.",
  allowAccessTitle: "ارجو السماح للكاميرا بالتقاط صورك",
  authenticateWith: "%{pluginName} الربط مع",
  authenticateWithTitle: "من اجل اختيار الملفات %{pluginName} الرجاء الربط مع ",
  back: "رجوع",
  browse: "تصفح",
  browseFiles: "تصفح",
  cancel: "الغاء",
  cancelUpload: "الغاء الدفع",
  chooseFiles: "اختار الملفات",
  closeModal: "اغلاق الشكل",
  companionError: "الربط مع Companion فشل",
  complete: " اكتمل ",
  connectedToInternet: "موصل بالانترنت",
  copyLink: "انسخ الرابط",
  copyLinkToClipboardFallback: "انسخ الرابط في الاسفل",
  copyLinkToClipboardSuccess: "تم نسخ الرابط",
  creatingAssembly: "تجهيز الرفع...",
  creatingAssemblyFailed: "Transloadit: لم يستطع التجميع",
  dashboardTitle: "رافع الملفات",
  dashboardWindowTitle: "نافذة رفع الملفات (ارجع للاغلاق)",
  dataUploadedOfTotal: "%{complete} من اصل %{total}",
  done: "انتهى",
  dropHereOr: "او  اسحب الملفات هنا %{browse}",
  dropHint: "او  اسحب الملفات هنا %{browse}",
  dropPasteBoth: "او  اسحب الملفات هنا %{browse}",
  dropPasteFiles: "او  اسحب الملفات هنا %{browse}",
  dropPasteFolders: "او  اسحب الملفات هنا %{browse}",
  dropPasteImportBoth: "او  اسحب الملفات هنا %{browse}",
  dropPasteImportFiles: "او  اسحب الملفات هنا %{browse}",
  dropPasteImportFolders: "او  اسحب الملفات هنا %{browse}",
  editFile: "تعديل الملف",
  editing: "جاري تعديل %{file}",
  emptyFolderAdded: "لا يوجد ملفات او مجلدات هنا",
  encoding: "التشفير...",
  enterCorrectUrl: "خطأ في الرابط: ارجو التأكد من ادخال رابط مباشر للملف",
  enterUrlToImport: "ادخل الرابط لاستيراد الملفات",
  exceedsSize: "الملف اكبر من الحجم المسموح %{size}",
  failedToFetch: "Companion فشل في جلب الرابط, ارجو التأكد من الرابط",
  failedToUpload: "فشل الرفع %{file}",
  fileSource: "مصدر الملف: %{name}",
  filesUploadedOfTotal: {
    0: "%{complete} من %{smart_count} تم رفع ملف",
    1: "%{complete} من %{smart_count} تم رفع ملفات",
    2: "%{complete} من %{smart_count} تم رفع ملفات"
  },
  filter: "تصفيه",
  finishEditingFile: "انهاء تعديل الملف",
  folderAdded: {
    0: "%{folder} ملف من %{smart_count} تم اضافة",
    1: "%{folder} ملفات من %{smart_count} تم اضافة",
    2: "%{folder} ملفات من %{smart_count} تم اضافة"
  },
  import: "استيراد",
  importFrom: "استيراد من %{name}",
  loading: "جاري التحميل...",
  logOut: "تسجيل الخروج",
  myDevice: "جهازي",
  noFilesFound: "لا يوجد ملفات او مجلدات هنا",
  noInternetConnection: "لا يوجد اتصال بالانترنت",
  pause: "ايقاف",
  pauseUpload: "ايقاف الرفع",
  paused: "موقف",
  poweredBy: "مشغل ب",
  processingXFiles: {
    0: "ملف %{smart_count} جاري معالجة",
    1: "ملفات %{smart_count}  جاري معالجة",
    2: "ملفات %{smart_count} جاري معالجة "
  },
  removeFile: "امسح الملف",
  resetFilter: "اعادة ضبط التصفيه",
  resume: "استئناف",
  resumeUpload: "استئناف الرفع",
  retry: "اعادة المحاولة",
  retryUpload: "اعادة الرفع",
  saveChanges: "حفظ التغييرات",
  selectX: {
    0: "%{smart_count} اختر",
    1: "%{smart_count} اختر",
    2: "%{smart_count} اختر"
  },
  smile: "ابتسم!",
  startRecording: "بدء تسجيل الفيديو",
  stopRecording: "ايقاف تسجيل الفيديو",
  takePicture: "التقط صوره",
  timedOut: "رفع تأخر ب %{seconds} ثواني, الغاء الرفع.",
  upload: "رفع",
  uploadComplete: "الرفع اكتمل",
  uploadFailed: "الرفع فشل",
  uploadPaused: "الرفع موقف",
  uploadXFiles: {
    0: "رفع %{smart_count} ملف",
    1: "رفع %{smart_count} ملفات",
    2: "رفع %{smart_count} ملفات"
  },
  uploadXNewFiles: {
    0: "رفع +%{smart_count} ملف",
    1: "رفع +%{smart_count} ملفات",
    2: "رفع +%{smart_count} ملفات"
  },
  uploading: "يتم الرفع",
  uploadingXFiles: {
    0: "يتم رفع %{smart_count} ملف",
    1: "يتم رفع %{smart_count} ملفات",
    2: "يتم رفع %{smart_count} ملفات"
  },
  xFilesSelected: {
    0: "%{smart_count} ملف محددة",
    1: "%{smart_count} ملفات محددة",
    2: "%{smart_count} ملفات محددة"
  },
  xMoreFilesAdded: {
    0: "%{smart_count} ملف اضافي جديد",
    1: "%{smart_count} ملفات اضافيه جديده",
    2: "%{smart_count} ملفات اضافيه جديده"
  },
  xTimeLeft: "%{time} متبقي",
  youCanOnlyUploadFileTypes: "تستطيع فقط رفع : %{types}",
  youCanOnlyUploadX: {
    0: "تستطيع فقط رفع %{smart_count} الملف",
    1: "تستطيع فقط رفع %{smart_count} ملفات",
    2: "تستطيع فقط رفع %{smart_count} ملفات"
  },
  youHaveToAtLeastSelectX: {
    0: "يجب ان تختار على الاقل  %{smart_count} ملف",
    1: "يجب ان تختار على الاقل  %{smart_count} ملفات",
    2: "يجب ان تختار على الاقل  %{smart_count} ملفات"
  },
  selectFileNamed: "%{name} اختر الملف",
  unselectFileNamed: "%{name} إلغاء تحديد الملف",
  openFolderNamed: "%{name} افتح المجلد"
}

ar.pluralize = function pluralize(n) {
  if (n === 1) {
    return 0
  }
  return 1
}

if (typeof window !== "undefined" && typeof window.Uppy !== "undefined") {
  window.Uppy.locales.ar = ar
}

module.exports = ar
