<?php

return [

    'defaultMeta' => [
        'title' => ['globalSeo.fieldSeoTitle'],
        'description' => ['globalSeo.fieldSeoDescription'],
        'image' => ['globalSeo.fieldSeoImageAsset']
      ],

    'defaultProfile' => 'standard',

    'fieldProfiles' => [
        'standard' => [
            'title' => ['fieldSeoTitle', 'fieldHead', 'fieldHeading', 'fieldTitle', 'title'],
            'description' => ['fieldSeoDescription', 'fieldLead', 'fieldLeadtext', 'summary'],
            'image' => ['fieldSeoImageAsset', 'fieldHeroImageAsset']
        ]
    ]

];