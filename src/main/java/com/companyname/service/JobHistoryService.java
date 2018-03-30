package com.companyname.service;

import com.companyname.domain.JobHistory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * Service Interface for managing JobHistory.
 */
public interface JobHistoryService {

    /**
     * Save a jobHistory.
     *
     * @param jobHistory the entity to save
     * @return the persisted entity
     */
    JobHistory save(JobHistory jobHistory);

    /**
     * Get all the jobHistories.
     *
     * @param pageable the pagination information
     * @return the list of entities
     */
    Page<JobHistory> findAll(Pageable pageable);

    /**
     * Get the "id" jobHistory.
     *
     * @param id the id of the entity
     * @return the entity
     */
    JobHistory findOne(Long id);

    /**
     * Delete the "id" jobHistory.
     *
     * @param id the id of the entity
     */
    void delete(Long id);
}
