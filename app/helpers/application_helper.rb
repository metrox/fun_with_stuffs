module ApplicationHelper
    def webpack_bundle_tag(asset)
      src =
        if Rails.configuration.webpack[:use_manifest]
          manifest = Rails.configuration.webpack[:asset_manifest]
          filename = manifest[asset]

          path_to_asset("assets/#{filename}")
        else
          path_to_asset("assets/#{asset}")
        end

      "<script type='text/javascript' src='#{src}'></script>".html_safe
    end
end
