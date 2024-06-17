<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SectionController extends Controller
{
    // Other methods...

    public function getSections(Request $request)
    {
        $program = $request->input('program');
        $yrlevel = $request->input('yrlevel');

        $sections = [];

        // Example section options
        $sectionOptions = [
            'BSIT' => [
                'Freshman' => ['IT1R1', 'IT1R2', 'IT1R3'],
                'Sophomore' => ['IT2R1', 'IT2R2', 'IT2R3'],
                'Junior' => ['IT3R1', 'IT3R2', 'IT3R3'],
                'Senior' => ['IT4R1', 'IT4R2', 'IT4R3'],
            ],
            'BSTCM' => [
                'Freshman' => ['TCM1H1', 'TCM1H2', 'TCM1H3'],
                'Sophomore' => ['TCM2H1', 'TCM2H2', 'TCM2H3'],
                'Junior' => ['TCM3H1', 'TCM3H2', 'TCM3H3'],
                'Senior' => ['TCM4H1', 'TCM4H2', 'TCM4H3'],
            ],
            'BSCS' => [
                'Freshman' => ['CS1F1', 'CS1F2', 'CS1F3'],
                'Sophomore' => ['CS2F1', 'CS2F2', 'CS2F3'],
                'Junior' => ['CS3F1', 'CS3F2', 'CS3F3'],
                'Senior' => ['CS4F1', 'CS4F2', 'CS4F3'],
            ],
            'BSDS' => [
                'Freshman' => ['DS1G1', 'DS1G2', 'DS1G3'],
                'Sophomore' => ['DS2G1', 'DS2G2', 'DS2G3'],
                'Junior' => ['DS3G1', 'DS3G2', 'DS3G3'],
                'Senior' => ['DS4G1', 'DS4G2', 'DS4G3'],
            ],
        ];

        if (isset($sectionOptions[$program][$yrlevel])) {
            $sections = $sectionOptions[$program][$yrlevel];
        }

        return response()->json(['sections' => $sections]);
    }
}
