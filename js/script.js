$(document).ready(function(){function c(){var a=0;$("[data-product-info]").each(function(){var t=$(this).attr("data-product-price"),o=$(this).find("[data-Product-quantity]").val();a+=t*o}),$("#total-price-for-all-products").text(a+"$")}$('[data-toggle="tooltip"]').tooltip(),$("[data-add-to-cart]").click(function(t){alert("أضيف المُنتج إلى عربة الشراء"),t.stopPropagation()}),$('.product-option input[type="radio"]').change(function(){$(this).parents(".product-option").siblings().removeClass("active"),$(this).parents(".product-option").addClass("active")}),$("[data-remove-from-cart]").click(function(){$(this).parents("[data-product-info]").remove(),c()}),$("[data-product-quantity]").change(function(){var t=$(this).val(),o=$(this).parents("[data-product-info]"),a=t*o.attr("data-product-price");o.find(".total-price-for-product").text(a+"$"),c()});var a={sa:["جدة","الرياض"],eg:["الإسكندرية","القاهرة"],jo:["الزرقاء","عمان"],sy:["حماه","حلب","دمشق"]};$('#form-checkout select[name="country"]').change(function(){var t=$(this).val(),o=a[t];$('#form-checkout select[name="city"]').empty(),$('#form-checkout select[name="city"]').append('<option disabled selected value="">اختر المدينة</option>'),o.forEach(function(t){var o=$("<option></option>");o.text(t),o.val(t),$('#form-checkout select[name="city"]').append(o)})}),$('#form-checkout input[name="payment_method"]').change(function(){"on_delivery"===$(this).val()?$("#credit-card-info input").prop("disabled",!0):$("#credit-card-info input").prop("disabled",!1),$("#credit-card-info").toggle()})});