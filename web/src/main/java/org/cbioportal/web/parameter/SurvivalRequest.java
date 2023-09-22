package org.cbioportal.web.parameter;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.util.List;

public class SurvivalRequest implements Serializable {

    @Size(min = 1, max = PagingConstants.MAX_PAGE_SIZE)
    private List<PatientIdentifier> patientIdentifiers;

    @NotNull
    private String attributeIdPrefix;

    @Valid
    private ClinicalEventRequestIdentifier startEventRequestIdentifier;

    private ClinicalEventRequestIdentifier endEventRequestIdentifier;

    public List<PatientIdentifier> getPatientIdentifiers() {
        return patientIdentifiers;
    }

    public void setPatientIdentifiers(List<PatientIdentifier> patientIdentifiers) {
        this.patientIdentifiers = patientIdentifiers;
    }

    public String getAttributeIdPrefix() {
        return attributeIdPrefix;
    }

    public void setAttributeIdPrefix(String attributeIdPrefix) {
        this.attributeIdPrefix = attributeIdPrefix;
    }

    public ClinicalEventRequestIdentifier getStartEventRequestIdentifier() {
        return startEventRequestIdentifier;
    }

    public void setStartEventRequestIdentifier(ClinicalEventRequestIdentifier startEventRequestIdentifier) {
        this.startEventRequestIdentifier = startEventRequestIdentifier;
    }

    public ClinicalEventRequestIdentifier getEndEventRequestIdentifier() {
        return endEventRequestIdentifier;
    }

    public void setEndEventRequestIdentifier(ClinicalEventRequestIdentifier endEventRequestIdentifier) {
        this.endEventRequestIdentifier = endEventRequestIdentifier;
    }
}
