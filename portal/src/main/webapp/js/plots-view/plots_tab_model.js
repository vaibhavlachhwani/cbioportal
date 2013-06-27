/**
 *
 * - Generate the plots tab "global" data object (Being used in every sub tabs)
 * - AJAX data retrieving function (using JSON servlet)
 * - Cache every generated data set in a global variable
 *
 */

var Plots = (function(){

    var genetic_profiles = {
            genetic_profile_mutations : [],
            genetic_profile_mrna : [],
            genetic_profile_copy_no : [],
            genetic_profile_rppa : [],
            genetic_profile_dna_methylation : []
        };

    function getGeneticProfileCallback(result) {

        for (var key in result) {
            var obj = result[key];
            var profile_type = obj.GENETIC_ALTERATION_TYPE;
            if (profile_type === "MUTATION_EXTENDED") {
                genetic_profiles.genetic_profile_mutations.push([obj.STABLE_ID, obj.NAME]);
            } else if(profile_type === "COPY_NUMBER_ALTERATION") {
                genetic_profiles.genetic_profile_copy_no.push([obj.STABLE_ID, obj.NAME]);
            } else if(profile_type === "MRNA_EXPRESSION") {
                genetic_profiles.genetic_profile_mrna.push([obj.STABLE_ID, obj.NAME]);
            } else if(profile_type === "METHYLATION") {
                genetic_profiles.genetic_profile_dna_methylation.push([obj.STABLE_ID, obj.NAME]);
            } else if(profile_type === "PROTEIN_ARRAY_PROTEIN_LEVEL") {
                genetic_profiles.genetic_profile_rppa.push([obj.STABLE_ID, obj.NAME]);
            }
        }

        PlotsMenu.init();
        PlotsMenu.update();
        PlotsTwoGenesMenu.init();
        PlotsTwoGenesMenu.update();
        PlotsCustomMenu.init();
        PlotsCustomMenu.update();

    }

    return {

        init: function() {
            var paramsGetProfiles = {
                cancer_study_id: cancer_study_id
            };
            $.post("getGeneticProfile.json", paramsGetProfiles, getGeneticProfileCallback, "json");
        },

        getGeneticProfiles: function() {
            return genetic_profiles;
        },

        getProfileData: function(gene, genetic_profile_id, case_set_id, callback_func) {
            var paramsGetProfileData = {
                gene_list: gene,
                genetic_profile_id: genetic_profile_id,
                case_set_id: case_set_id
            };
            $.post("getProfileData.json", paramsGetProfileData, callback_func, "json");
        }

    };

}());









